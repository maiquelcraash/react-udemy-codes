import React from 'react';
import './CharComponent.css';

//componentes sem state são chamados de stateless components
const charComponent = (props) => {
    return (
        <div onClick={props.click} className='char-component'>
            {props.char}
        </div>
    )
};

export default charComponent;