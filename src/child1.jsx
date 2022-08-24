import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Child2 from './child2';
// import shallowCompare from 'react-addons-shallow-compare';

const controller = new AbortController();
export default class Child1 extends PureComponent {
  static mouseMove = () => {
    console.log('mouse moved');
  };

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };

    this.signal = controller.signal;
  }

  async componentDidMount() {
    document.addEventListener(
      'mousemove',
      Child1.mouseMove,
    );

    this.inteval = setInterval(() => {
      console.log('interval');
    }, 1000);

    await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
      {
        signal: this.signal,
      },
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'mousemove',
      Child1.mouseMove,
    );

    clearInterval(this.inteval);

    controller.abort();
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //     // if (
  //     //   this.props !== nextProps ||
  //     //   this.state !== nextState
  //     // ) {
  //     //   return true;
  //     // }
  //     // return false;
  //   }

  increment = () => {
    // if (this.state.number > 5)
    //   throw new Error('something went wrong');

    this.setState(({ number }) => ({
      number: number + 1,
    }));
  };

  decrement = () => {
    this.setState(({ number }) => ({
      number: number - 1,
    }));
  };

  render() {
    console.log('child1 render');
    const { greet } = this.props;
    const { number } = this.state;

    if (number > 5) throw new Error('something went wrong');

    return (
      <div>
        <h1>Child1 component</h1>
        <div>{greet}</div>
        <button type="button" onClick={this.increment}>
          +
        </button>
        {number}
        <button type="button" onClick={this.decrement}>
          -
        </button>

        <Child2 />
      </div>
    );
  }
}

Child1.propTypes = {
  greet: PropTypes.string.isRequired,
};
