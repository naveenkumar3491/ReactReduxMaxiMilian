import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Naveen', age: '27' },
      { name: 'Shanker', age: '28' },
      { name: 'Bhagath', age: '29' }
    ]
  }

  switchNameHandler = (name) => {
    //console.log('switched');
    //this.state.persons[0].name = 'Naveen Kumar';
    this.setState({
      persons: [
        { name: name, age: '27' },
        { name: 'Shanker', age: '28' },
        { name: 'Bhagath', age: '29' }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'naveen', age: '27' },
        { name: event.target.value, age: '28' },
        { name: 'Bhagath', age: '29' }
      ]
    })
  }

  render() {
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button
              style={style} 
              onClick={() => this.switchNameHandler('Naveen Kumar')}>Switch Name</button>
        <Person 
              click={this.switchNameHandler.bind(this, 'Naveen Kumar')}
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
        <Person
              changed={this.nameChangedHandler} 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}>My Hobbies: Management</Person>
        <Person 
              name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
