import React from 'react';
import './Person.css'

//componentes sem state são chamados de stateless components
const person = ( props ) => {

    //props são enviadas como atributos no html/JSX
    //children é o que está sendo enviado dentro das tags <>aqui<>
    return (
        <div className='Person'>
            {/* Evento onclick que recebe uma função enviada via props */}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p> 
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
};

export default person;