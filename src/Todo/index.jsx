import React, { Component } from 'react';
import './style.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   todoText: '',
      todoList: [],
    };
  }

  //   changeTodoText = event => {
  //     this.setState({
  //       todoText: event.target.value,
  //     });
  //   };

  addTodo = event => {
    event.preventDefault();

    // document.addEventListener("copy", () => {

    // })

    this.setState(
      ({ todoList }) => ({
        todoList: [...todoList, this.todoTextRef.value],
      }),
      () => {
        // console.log(this.state.todoList.length);
        this.todoTextRef.value = '';
      },
    );
  };

  render() {
    console.log('render');

    const { todoList } = this.state;

    return (
      <div className="container">
        <h1>Todo List</h1>
        <form onSubmit={this.addTodo}>
          <input
            ref={ref => {
              this.todoTextRef = ref;
            }}
            type="text"
            placeholder="Write your todo here..."
            // value={todoText}
            // onChange={this.changeTodoText}
          />
          <button type="submit">Add Todo</button>
        </form>
        <div>
          {todoList.map(item => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    );
  }
}
