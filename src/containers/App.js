import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'a1', name: 'Naveen', age: '27' },
      { id: 'a2', name: 'Shanker', age: '28' },
      { id: 'a3', name: 'Bhagath', age: '29' }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;                 //mutates original array, bad practice
    const persons = [...this.state.persons];              //creates a new copy u can also use slice method
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        clicked={this.togglePersonsHandler}
        appTitle={this.props.appTitle}/>
        {persons}
      </div>
    );
  }
}

export default App;
