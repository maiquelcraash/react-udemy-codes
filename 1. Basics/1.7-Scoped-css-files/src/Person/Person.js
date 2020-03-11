import React from 'react';
import styled from 'styled-components';

// Cria-se um componente a partir do styled components
const StyledDiv = styled.div`{
    .Person {
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eeeeee;
        box-shadow: 0 2px 3px #cccccc;
        padding: 16px;
        text-align: center;
    }
}`

//componentes sem state são chamados de stateless components
const person = (props) => {
    return (
        //Usando o Styled Component criado e estilizado lá em cima 
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
            <button onClick={props.onDelete}>Delete</button>
        </StyledDiv>
    )
};

export default person;