import React from 'react';
import './Person.css';
import Radium from 'radium';

//componentes sem state são chamados de stateless components
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    //Criando um ERRO Randômico
    const rand = Math.random();
    if (rand > 0.7) {
        throw new Error ('Algo deu errado no componente Persons.js');
    }

    return (
        <div className='Person' style={style}>
            {/* Evento onclick que recebe uma função enviada via props */}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
};

export default Radium(person);