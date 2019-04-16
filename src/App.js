import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

import Input from './Input/Input';
import List from './List/List';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lista : [],
      persons: [
        { id:'ahah', name: 'Max', age: 36},
        { id:'a234h', name: 'Manu', age: 29},
        { id:'6d4f', name: 'Stephanie', age: 23},
      ]
    }
  }

  handleClick = (nome, idade) => {
    const {lista} = this.state;
    this.setState({lista: [...lista, { nome, idade }]}, () => console.log(this.state));
  }

  nameChangedHandler = (event, id) => {

    // const person = this.state.persons.find(p => {
    //   return p.id === id;
    // });
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ( {
      persons: [
        { name: 'newName', age: 28 },
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 26}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age} 
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
            )
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

    }
    //let classes = ['red', 'bold'].join(' '); //"red bold"
    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');// classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Oi, eu sou uma aplicação React</h1>
        <p className={classes.join(' ')}>Isso está funcionando</p>
 
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>

        {persons}
            
        <hr />
        <hr />
        <hr />
        <Input onClick={this.handleClick} />
        <List lista={this.state.lista} />
      </div>
    );
  }
}

export default App;
