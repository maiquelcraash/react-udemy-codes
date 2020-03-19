import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';                //Radium is a set of tools to manage inline styles on React elements. Styleroot aumenta as possibilidades para media queries e keyframes

class App extends Component {
    //objeto com os estados (propriedades) do componente
    //para obter melhor performance em gerenciamento de lista, o react pede um Unique ID para cada item da lista
    state = {
        persons: [
            { id: 'p1', name: 'Max', age: 28 },
            { id: 'p2', name: 'Manu', age: 29 },
            { id: 'p3', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value'
    };

    //criando um método dentro do componente
    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';

        //Atualizando o estado do componente. O React vai fazer merge no estado, ou seja, não precisa atualizar todas as propriedades
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ],
            showPersons: false
        });
    };

    //atualizando estado com base no resultado de evento de um componente filho
    nameChangeHandler = (event, id) => {

        //descobrir o index da person a ser alterada
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        })

        //OPÇÃO 1: copiar o objeto person para um objeto diferente (já que o objeto do react é imutável)
        const person = {
            ...this.state.persons[personIndex]
        }

        //OPÇÃO 2: usar o Object.assign()
        //const person = Object.assign({}, this.state.persons[personIndex]);

        //atualizando o nome
        person.name = event.target.value;

        //copiando o array
        const persons = [...this.state.persons]

        //atualizando o array com a person modificada
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    deletePersonsHandler = (index) => {
        //Tem que copiar o array primeiro pois o state é imutavel. 
        let persons = this.state.persons.slice();         //Pode-se usar o método slice sem parâmentros
        persons = [...persons]                              //Ou pode-se usar o spread operator

        persons.splice(index, 1);                           //remove o elemento do index recebido
        this.setState({ persons: persons });                //atualiza o estado
    }

    render() {//método obrigatório
        /* qualquer componente precisa retornar algo para ser renderizado */

        //criando um estilo
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            paddind: '8px',
            cursor: 'pointer',
            color: "white",
            ':hover': {                         //só posso add esses subselectors com o Radium!
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

        let persons = null;

        //IF usado no condicionamento abaixo (no return)
        if (this.state.showPersons) {
            persons = (
                <div>
                    {/* O react automaticamente extrai e tenta renderizar aquilo que retorna do map (que é um array) */}
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                name={person.name}
                                age={person.age}
                                onDelete={() => { this.deletePersonsHandler(index) }}
                                key={person.id}
                                change={(event) => { this.nameChangeHandler(event, person.id) }}
                            />
                        )
                    })}
                </div>
            )

            //alterando dinamicamente uma propriedade CSS
            style.backgroundColor = "red";
            style[':hover'] = {                     //O Radium permite add subselectors!!!
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        const classes = [];
        if (this.state.persons.length < 3) {
            classes.push('red', 'bold');
        }

        /* Posso retorna JSX...*/
        return (
            /* StyleRoot é um componente do Radium que permite aplicar media queries e keyframes */

            <StyleRoot>                                
                <div className="App">                     {/* só pode ter um root element */}
                    <h1>Hi, I'm a React App - Class Component</h1>

                    {/* passando o estilo criado como parâmetro*/}
                    {/*  */}
                    <button
                        style={style}
                        onClick={this.togglePersonsHandler}>Show Hide Persons
                </button>


                    {/* EXIBIÇÃO CONDICIONAL 1: Expressão ternária para decidir se vai exibir um bloco de pessoas ou não*/}
                    <h4>Vai exibir usando expressão ternária e todo o bloco de JSX</h4>
                    <p>INFO: You can Click on Manu do see reacts</p>
                    <p>INFO: You can input text on Manu to see reacts</p>


                    {
                        this.state.showPersons ?
                            <div>
                                <Person
                                    name={this.state.persons[0].name}
                                    age={this.state.persons[0].age}
                                />
                                <Person
                                    name={this.state.persons[1].name}
                                    age={this.state.persons[1].age}
                                    click={this.switchNameHandler.bind(this, "Marlon")}
                                    change={this.nameChangeHandler}
                                >
                                    My Hobbies: Racing
                        </Person>
                            </div> : null
                    }
                    <hr />

                    {/* EXIBIÇÃO CONDICIONAL 2: Outra forma é testar se tem pessoas (ver if lá em cima) e popular a variável diretamente */}
                    <h4>Vai exibir um IF e uma variável que vai ou não conter o JSX</h4>
                    <p>INFO: You can delete one of bellow persons (just one because the list above will broke)</p>
                    <p className={classes.join(' ')}>Vai ficar vermelho quando houverem menos de duas pessoas</p>
                    {persons}
                </div>
            </StyleRoot>
        );

        /* Ou posso criar o HTML no braço */
        // return React.createElement('div', {className: 'App'},
        //     React.createElement('h1', null,
        //         'Conteúdo criado com JS'));
    }
}

//Radium é um supercomponente que emcapsula o teu componente, permitindo usar funcionalidades diferentes
export default Radium(App);
