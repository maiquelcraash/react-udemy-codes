import React, { Component } from "react";

/*Error boundaries são componentes React que capturam erros de JavaScript em qualquer lugar na sua árvore de componentes filhos, 
registram esses erros e mostram uma UI alternativa em vez da árvore de componentes que quebrou. 
Error boundaries capturam estes erros durante a renderização, em métodos do ciclo de vida, e em construtores de toda a árvore abaixo delas.*/

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    //método padrão do react >16 que pega todos os erros que ocorrerem em componentes dentro deste boundary
    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error });
    };

    render() {
        //Caso der erro, vai retornar o erro
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        }

        //se não tiver erro, vai retornar os componentes dentro do bundary
        else {
            return this.props.children;
        }

    }
}
