import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  //O primeiro Lifecycle hook, pode ser usado, por exemplo, para definir um state com base em props que chegam.
  constructor(props) {
    super(props);                     //caso o construtor seja sobrescrito, deve-se chamar super() passando as props para que o componente do qual foi herdado, também receba as props

    console.log('[App.js] Constructor');

    //ó possível instanciar state aqui dentro. Na verdade o React sempre inicia o state aqui dentro, por baixo dos panos.
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  /* getDerivedStateFromProps é invocado imediatamente antes de chamar o método render, ambos na montagem inicial 
  e nas atualizações subsequente. Devem retornar um objeto para atualizar o state, ou null para não atualizar nada. */
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js getDerivedStateFromProps', props, state)
    return state
  }

  /* OBSOLETO: chamado antes de montar no DOM */
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }



  /* É invocado imediatamente após um componente ser montado (inserido na árvore). Inicializações que exijam 
  nós do DOM devem vir aqui. Se precisar carregar data de um endpoint remoto, este é um bom lugar para instanciar sua requisição. */
  componentDidMount() {
    console.log('[App.js] ComponentDidMount');
  }



  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] Render')

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
    }

    return (
      <div className={classes.App}>
        {/* Por ser class base component, tanto state quanto props são propriedades locais e podem ser acessados via this. */}
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
