import React from 'react';

const person = ( props ) => {

    //props são enviadas como atributos no html/JSX
    //children é o que está sendo enviado dentro das tags <>aqui<>
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p> 
            <p>{props.children}</p>
        </div>
    )
};

export default person;