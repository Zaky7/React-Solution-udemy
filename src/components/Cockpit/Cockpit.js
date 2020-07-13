import React from 'react';

import PropTypes from 'prop-types';
import styles from './Cockpit.module.scss';

const Cockpit = props => {
  const { children, clicked } = props;

  return (
    <>
      <button className={styles.Button} type="button" onClick={clicked}>
        Show Persons
      </button>
      <p className={styles.Paragraph}>This is paragraph written by me!!</p>
      {children} 
    </>
  );
};

Cockpit.defaultProps = {
  children: null,
};

Cockpit.propTypes = {
  clicked: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Cockpit;
