import React from 'react';

//componentes sem state são chamados de stateless components
const validationComponent = (props) => {
    const length = props.strLength;

    return (
        <div className='validation'>
            {
                length > 5 ?
                    <p>Text long enough</p>
                    :
                    <p>Text too short</p>
            }
        </div>
    )
};

export default validationComponent;