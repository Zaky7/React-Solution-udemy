// eslint-disable-max-classes-per-file: "error"
import React, { Component } from 'react';
import styles from './App.module.scss';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: 'Max', age: 29 },
        { id: 2, name: 'Harish', age: 17 },
        { id: 3, name: 'Rashid', age: 34 },
      ],
    };
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { id: 1, name: 'Max', age: 29 },
        { id: 2, name: 'Zakir', age: 17 },
        // { name: "Rashid", age: 34 }
      ],
      showPersons: false,
    });
  };

  onChangeHandler = event => {
    this.setState({
      persons: [
        { id: 1, name: 'Zakir', age: 21 },
        { id: 2, name: event.target.value, age: 21 },
        { id: 3, name: 'Rashid', age: 34 },
      ],
    });
  };

  togglePersonVisibility = () => {
    const { showPersons } = this.state;
    this.setState({
      showPersons: !showPersons,
    });
  };

  nameChangeHandler = (event, id) => {
    const { persons } = this.state;
    const personIndex = persons.findIndex(person => person.id === id);

    const person = {
      ...persons[personIndex],
    };

    person.name = event.target.value;

    const newPersons = [...persons];
    newPersons[personIndex] = person;
    this.setState({
      persons: newPersons,
    });
  };

  deletePersonHandler = personIndex => {
    const { persons } = this.state;
    const index = persons.findIndex(person => person.id === personIndex);

    if (index !== -1) {
      const newPersons = [...persons];
      newPersons.splice(index, 1);
      this.setState({
        persons: newPersons,
      });
    }
  };

  render() {
    // Inline style
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px 20px',
      cursor: 'pointer',
      borderRadius: '18px',
      color: 'white',
    };

    let personList = null;
    const { showPersons, persons } = this.state;

    if (showPersons) {
      personList = (
        <div>
          {persons.map(person => (
            <Person
              key={person.id}
              deleteElement={() => this.deletePersonHandler(person.id)}
              name={person.name}
              age={person.age}
              Id={person.id}
              changed={event => this.nameChangeHandler(event, person.id)}
            />
          ))}
        </div>
      );

      style.backgroundColor = '#0087ff';
    }

    return (
      <div className={styles.App}>
        <button className={styles.Button} type="button" onClick={this.togglePersonVisibility}>
          Show Persons
        </button>
        <p className={styles.Paragraph}>This is paragraph written by me!!</p>
        {personList}
      </div>
    );
  }
}

export default App;
