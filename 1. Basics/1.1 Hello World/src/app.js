//props recebe as propridades enviadas para o componente
function Person(props) {
    return (                //Abre-se parentes para poder quebrar linha
        <div>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    );
}

let App = (
  <div>
      <Person name="Maiquel" age="28"/>
      <Person name="Jaine " age="24"/>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));