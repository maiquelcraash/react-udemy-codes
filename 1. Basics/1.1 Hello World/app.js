//props recebe as propridades enviadas para o componente
function Person(props) {
    return (//Abre-se parentes para poder quebrar linha
        React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                props.name
            ),
            React.createElement(
                "p",
                null,
                props.age
            )
        )
    );
}

var App = React.createElement(
    "div",
    null,
    React.createElement(Person, { name: "Maiquel", age: "28" }),
    React.createElement(Person, { name: "Jaine ", age: "24" })
);

ReactDOM.render(App, document.getElementById('root'));