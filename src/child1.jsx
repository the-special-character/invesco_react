import React, { PureComponent } from 'react';
import Child2 from './child2';
// import shallowCompare from 'react-addons-shallow-compare';

export default class Child1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
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
