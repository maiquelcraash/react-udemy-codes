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
    switchNameHandler = () => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';

        //Atualizando o estado do componente. O React vai fazer merge no estado, ou seja, não precisa atualizar todas as propriedades
        this.setState({
            persons: [
                { name: 'Maximilian', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        });
    };


    render() {//método obrigatório
        /* qualquer componente precisa retornar algo para ser renderizado */

        /* Posso retorna JSX...*/
        return (                                    /* JSX se escrito entre parênteses, permite multi-linhas */
            <div className="App">                     {/* só pode ter um root element */}
                <h1>Hi, I'm a React App - Class Component</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                {/* lendo o estado do componente */}
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                >
                    My Hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );

        /* Ou posso criar o HTML no braço */
        // return React.createElement('div', {className: 'App'},
        //     React.createElement('h1', null,
        //         'Conteúdo criado com JS'));
    }
}

export default App;
