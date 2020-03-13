import React from 'react';
import classes from './Person.css';


//componentes sem state são chamados de stateless components
const Person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
};

export default Person;