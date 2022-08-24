import React, { Component } from 'react';
import './style.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
    };
  }

  //   changeTodoText = () => {};

  render() {
    const { todoText } = this.state;

    return (
      <div className="container">
        <h1>Todo List</h1>
        <form>
          <input
            type="text"
            placeholder="Write your todo here..."
            value={todoText}
            // onChange={this.changeTodoText}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
