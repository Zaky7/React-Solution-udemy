/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './Person.module.scss';

// This is a Function
const Person = ({ deleteElement, name, age, changed }) => (
  <div className={styles.PersonDiv}>
    <div className="Person">
      {/* Delete Icon  */}
      <div className={styles.DeleteIconDiv} onClick={deleteElement} onKeyDown={deleteElement}>
        <FontAwesomeIcon className=".delete-icon" icon={faTrash} />
      </div>

      {/* Paragraph */}
      <p>
        &lsquo;I am a living Person, My name is {name} and I am {age} Old&lsquo;
      </p>
      {/* Input Element */}
      <input
        className={styles.PersonInput}
        type="text"
        onChange={changed}
        placeholder="Enter the username"
      />
    </div>
  </div>
);

Person.propTypes = {
  deleteElement: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired,
};

export default Person;
