// eslint-disable-max-classes-per-file: "error"
import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person';
import { StyledButton, StyledParagraph } from './AppStyle';

const App = () => {
  // Person State
  const [persons, setPersons] = useState([
    { id: 1, name: 'Max', age: 29 },
    { id: 2, name: 'Harish', age: 17 },
    { id: 3, name: 'Rashid', age: 34 },
  ]);

  // Show Person State
  const [showPersons, setShowPersons] = useState(false);

  // Handlers
  const togglePersonVisibility = () => {
    setShowPersons(!showPersons);
  };

  const nameChangeHandler = (event, id) => {
    const personIndex = persons.findIndex(person => person.id === id);

    const person = {
      ...persons[personIndex],
    };

    person.name = event.target.value;

    const newPersons = [...persons];
    newPersons[personIndex] = person;
    setPersons(newPersons);
  };

  const deletePersonHandler = personIndex => {
    const index = persons.findIndex(person => person.id === personIndex);
    if (index !== -1) {
      const newPersons = [...persons];
      newPersons.splice(index, 1);
      setPersons(newPersons);
    }
  };

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

  if (showPersons) {
    personList = (
      <div>
        {persons.map(person => (
          <Person
            deleteElement={() => deletePersonHandler(person.id)}
            key={person.id}
            name={person.name}
            age={person.age}
            Id={person.id}
            changed={event => nameChangeHandler(event, person.id)}
          />
        ))}
      </div>
    );

    style.backgroundColor = '#0087ff';
  }

  return (
    <div className="App">
      <StyledButton showPerson={showPersons} type="button" onClick={togglePersonVisibility}>
        Switch Name
      </StyledButton>
      <StyledParagraph personsLength={persons.length}>
        This is paragraph written by me!!
      </StyledParagraph>
      {personList}
    </div>
  );
};

export default App;
