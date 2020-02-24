import React from 'react';

//componentes sem state são chamados de stateless components
const userInput = (props) => {
    return (
        <input className="userInput" onChange={props.change} value={props.user.username}/>
    )
}

export default userInput;