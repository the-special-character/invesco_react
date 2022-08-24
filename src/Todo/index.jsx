import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: uuidv4(),
            text: this.todoTextRef.value,
            isDone: false,
          },
        ],
      }),
      () => {
        // console.log(this.state.todoList.length);
        this.todoTextRef.value = '';
      },
    );
  };

  toggleCompleteTodo = item => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(
        x => x.id === item.id,
      );

      return {
        todoList: [
          ...todoList.slice(0, index),
          {
            ...todoList[index],
            isDone: !todoList[index].isDone,
          },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = item => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(
        x => x.id === item.id,
      );

      return {
        todoList: [
          ...todoList.slice(0, index),
          ...todoList.slice(index + 1),
        ],
      };
    });
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
          />
          <button type="submit">Add Todo</button>
        </form>
        <div className="screenWidth">
          {todoList.map(item => (
            <div key={item.id} className="todoItem">
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={() =>
                  this.toggleCompleteTodo(item)
                }
              />
              <p>{item.text}</p>
              <button
                type="button"
                onClick={() => this.deleteTodo(item)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
