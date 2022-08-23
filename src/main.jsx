/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child1 from './child1';

// Life Cycle method

// 4 stages of life cycle method

// 1. Mouting
// -> constructor
// -> getDerivedStateFromProps
// -> render
// -> componentDidMount

// 2. Updating
// -> getDerivedStateFromProps
// -> shouldComponentUpdate
// -> render
// -> getSnapshotBeforeUpdate
// -> componentDidUpdate

// 3. Unmounting
// 4. Error

// props are immutable

// let number = 0;

// your component will update on browser only if
// -> prop value change
// -> state value change

// stateful component
export default class Main extends Component {
  // base on prop value if you want to set state value
  // for analytics purpose we need constructor
  // bind methods
  // it will only once
  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      number: 0,
      greet: 'Hello',
    };

    // server call send all analytics details

    console.log(document.getElementById('header'));
  }

  // this method will call on Initialization and also when component re render
  // static getDerivedStateFromProps(props, state) {

  // }

  // on page load if you want fetch data from server
  // call only once
  async componentDidMount() {
    console.log();
    // O(logN)

    // O(1)
    this.h1ref.style = 'color: red';

    // O(N)

    // make server call
    // assign that data to state
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const json = await res.json();
      console.log(json);
      this.setState({ number: json.length });
    } catch (error) {}
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

  changeGreet = () => {
    this.setState(({ greet }) => ({
      greet: greet === 'Hello' ? 'Bounjour' : 'Hello',
    }));
  };

  // capturing info
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 'hello from getSnapshotBeforeUpdate';
  }

  // updating dom
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }

  render() {
    console.log('render');
    const { text } = this.props;
    const { number, greet } = this.state;
    return (
      <div>
        <h1
          ref={ref => {
            this.h1ref = ref;
          }}
          id="header"
          style={{
            color: 'blue',
          }}
        >
          {text}
        </h1>
        <button type="button" onClick={this.increment}>
          +
        </button>
        {number}
        <button type="button" onClick={this.decrement}>
          -
        </button>
        <div>
          {greet}
          <button type="button" onClick={this.changeGreet}>
            Change Greet Message
          </button>
        </div>
        <Child1 greet={greet} />
      </div>
    );
  }
}

// Main.getDerivedStateFromProps = (props, state) => {
//   console.log('getDerivedStateFromProps');
//   console.log(state);
//   console.log(document.getElementById('header'));
//   if (state.number === undefined) {
//     return {
//       number: props.number,
//     };
//   }
//   return null;
// };

Main.propTypes = {
  text: PropTypes.string.isRequired,
};
