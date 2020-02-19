import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {                            //método obrigatório
        /* qualquer componente precisa retornar algo para ser renderizado */

        /* Posso retorna JSX...*/
        return (                                    /* JSX se escrito entre parênteses, permite multi-linhas */
          <div className="App">                     {/* só pode ter um root element */ }
              <h1>Conteúdo criado com JSX</h1>
              <p>Parece html mas não é</p>
              <Person/>
              <Person/>
          </div>
        );

        /* Ou posso criar o HTML no braço */
        // return React.createElement('div', {className: 'App'},
        //     React.createElement('h1', null,
        //         'Conteúdo criado com JS'));
    }
}

export default App;
