import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  componentDidCatch = error => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    const { hasError, errorMessage } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>{errorMessage}</h1>;
    }
    return children;
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ErrorBoundry;
