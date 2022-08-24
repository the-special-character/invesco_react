import React, { Component, createRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filterType: 'all',
    };
    this.todoTextRef = createRef();
  }

  addTodo = event => {
    event.preventDefault();

    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: uuidv4(),
            text: this.todoTextRef.current.value,
            isDone: false,
          },
        ],
      }),
      () => {
        this.todoTextRef.current.value = '';
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

  filterTodo = event => {
    this.setState({ filterType: event.target.name });
  };

  render() {
    const { todoList, filterType } = this.state;

    return (
      <div className="container flex">
        <h1>Todo List</h1>
        <TodoForm
          addTodo={this.addTodo}
          ref={this.todoTextRef}
        />
        <TodoList
          todoList={todoList}
          filterType={filterType}
          toggleCompleteTodo={this.toggleCompleteTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter filterTodo={this.filterTodo} />
      </div>
    );
  }
}
