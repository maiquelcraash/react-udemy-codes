import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

  /* Executa uma função depois que tudo deste componente foi renderizado 
  É possível condicionar o useEffect a um determinado estado específico, chamando-o somente quanto esse estado for alterado*/
  useEffect(() => {
    console.log('[cockpit.js] useEffect');

    //fake http request
    setTimeout(() => {
      alert('This will show on start and on every person change')
    }, 1000)
  }, [props.persons])           //vai chamar esse efeito somente quando o props.persons for alterado

  //pode-se chamar várias vezes o useEffect
  useEffect(() => {
    alert('This will show on start only')
  }, [])                        //passando um array vazio, o react entende que é para executar somente uma vez

  useEffect(() => {
    return () => {              //uma função retornada será executada ao deletar o componente, pode ser usada para "limpezas"
      alert('This will show only when cockpit is deleted');
    }
  }, []);


  const assignedClasses = [];

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }


  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
}

export default cockpit;