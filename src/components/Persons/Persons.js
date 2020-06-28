import React from 'react';

import Person from './Person/Person';

const Persons = props =>
  props.persons.map(person => (
    <Person
      deleteElement={() => props.clicked(person.id)}
      key={person.id}
      name={person.name}
      age={person.age}
      Id={person.id}
      changed={event => props.changed(event, person.id)}
    />
  ));

export default Persons;
