import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
    
    // /* Obsoleto */
    // componentWillReceiveProps(props){
    //     console.log('[Persons] componentWillReceiveProps', props);
    // }


    /*getDerivedStateFromProps é invocado imediatamente antes de chamar o método render, ambos na montagem inicial e 
    nas atualizações subsequente. Devem retornar um objeto para atualizar o state, ou null para não atualizar nada. */
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons] getDerivedStateFromProps', props, state);
        return state;
    }

    /*Hook que pode ser usado para averiguar e decidir se um estado deve ser atualizado ou não. Deve sempre retornar true ou false*/
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    /*é invocado imediatamente antes que o retorno da renderização mais recente seja escrito e.g. no DOM. 
    Isto permite que o componente capture alguma informação do DOM (e.g. posição do scroll) antes que ela seja potencialmente alterada. */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps, prevState);
        return {message: "Esse cara vai ir para o componentDidUpdate!!"};
    }

    /* é invocado imediatamente após alguma atualização ocorrer. Este método não é chamado pelo initial render. Use isto como uma 
    oportunidade para alterar o DOM quando o componente for atualizado. Este também é um bom lugar para realizar requisições de rede 
    enquanto compara as props atuais com as props anteriores (e.g. uma chamada de rede pode não ser necessária se as props não mudaram). */
    componentDidUpdate(prevProps){
        console.log('[Persons.js] componentDidUpdate', prevProps);
    }

    render() {
        console.log('[Persons.js] Rendering')

        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;