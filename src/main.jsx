/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// props are immutable

// let number = 0;

// your component will update on browser only if
// -> prop value change
// -> state value change

// stateful component
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  increment = () => {
    // this.setState({ number: 1 });
    // this.setState(state => ({
    //   number: state.number + 1,
    // }));
    this.setState(({ number }) => ({
      number: number + 1,
    }));
  };

  decrement = () => {
    // this.setState({ number: -1 });
    this.setState(({ number }) => ({
      number: number - 1,
    }));
  };

  render() {
    const { text } = this.props;
    const { number } = this.state;
    return (
      <div>
        <h1>{text}</h1>
        <button type="button" onClick={this.increment}>
          +
        </button>
        {number}
        <button type="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}

Main.propTypes = {
  text: PropTypes.string.isRequired,
};
