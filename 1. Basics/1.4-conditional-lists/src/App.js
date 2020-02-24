import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    //objeto com os estados (propriedades) do componente
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
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
    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }


    render() {//método obrigatório
        /* qualquer componente precisa retornar algo para ser renderizado */

        //criando um estilo
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            paddind: '8px',
            cursor: 'pointer'
        }

        /* Posso retorna JSX...*/
        return (                                    /* JSX se escrito entre parênteses, permite multi-linhas */
            <div className="App">                     {/* só pode ter um root element */}
                <h1>Hi, I'm a React App - Class Component</h1>
                <p>INFO: You can Click on Manu do see reacts</p>
                <p>INFO: You can input text on Manu to see reacts</p>

                {/* passando o estilo criado como parâmetro*/}
                {/*  */}
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Show Hide Persons
                </button>


                {/* Expressão ternária para decidir se vai exibir um bloco ou não*/}
                {this.state.showPersons ?
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
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                        />
                    </div> : null
                }
            </div>
        );

        /* Ou posso criar o HTML no braço */
        // return React.createElement('div', {className: 'App'},
        //     React.createElement('h1', null,
        //         'Conteúdo criado com JS'));
    }
}

export default App;
