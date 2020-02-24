import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

    //o useState retorna um array com duas propridades: 1) o estado em si, 2) o método para atualizar esse estado
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ]
    });

    //Pode-se criar vários states
    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    //Cada state pode ser atualizado independentemente
    const switchNameHandler = () => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        setPersonsState({
            persons: [
                { name: 'Maximilian', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App - Hooks</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
            >
                My Hobbies: Racing
      </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            />
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};

export default app;
