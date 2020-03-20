import React from 'react';
import Person from './Person/Person';

//Com ES6, pode-se retornar diretamente da arrow function, desde que comece na mesma linha
const persons = (props) => props.persons.map((person, index) => {
    return <Person
        key={person.id}
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={(event) => props.changed(event, person.id)} />
});

export default persons;