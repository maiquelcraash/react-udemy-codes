import React, { Component } from 'react';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent'

class App extends Component {

    state = {
        text: {
            content: '', length: 0
        }
    };

    //criando um método dentro do componente
    changeTextListener = (event) => {

        const text = {
            content: event.target.value, length: event.target.value.length
        }

        this.setState({ text: text });
    };

    deleteCharListener = ((charIndexToDelete) => {
        let letterArr = this.state.text.content.split('');
        letterArr.splice(charIndexToDelete, 1);

        const text = letterArr.join("");

        const newText = {
            content: text,
            length: text.length
        };

        this.setState({ text: newText });
    });

    render() {//método obrigatório

        const letterArr = this.state.text.content.split('');

        /* Posso retorna JSX...*/
        return (
            <div className="App" style={{ margin: "40px" }}>                     {/* só pode ter um root element */}
                <h2>Exercise</h2>
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <hr></hr>

                <input value={this.state.text.content} onChange={this.changeTextListener}></input>
                <p>{this.state.text.length}</p>
                <ValidationComponent strLength={this.state.text.length} />

                {letterArr.map((letter, index) => {
                    return <CharComponent char={letter} key={index} click={() => this.deleteCharListener(index)} />
                })}

            </div>
        );


    }
}

export default App;
