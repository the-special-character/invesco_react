import React, { Component, createRef } from 'react';
import axiosInstance from '../utils/axiosInstance';
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

  componentDidMount() {
    this.loadTodo();
  }

  loadTodo = async () => {
    try {
      const res = await axiosInstance.get('todoList');

      this.setState({
        todoList: res.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  addTodo = async event => {
    event.preventDefault();
    try {
      const res = await axiosInstance.post('todoList', {
        text: this.todoTextRef.current.value,
        isDone: false,
      });

      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, res.data],
        }),
        () => {
          this.todoTextRef.current.value = '';
        },
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  toggleCompleteTodo = async item => {
    try {
      const res = await axiosInstance.put(
        `todoList/${item.id}`,
        {
          ...item,
          isDone: !item.isDone,
        },
      );

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(
          x => x.id === item.id,
        );

        return {
          todoList: [
            ...todoList.slice(0, index),
            res.data,
            ...todoList.slice(index + 1),
          ],
        };
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  deleteTodo = async item => {
    try {
      await axiosInstance.delete(`todoList/${item.id}`);

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
    } catch (error) {
      console.error(error.message);
    }
  };

  filterTodo = event => {
    this.setState({ filterType: event.target.name });
  };

  render() {
    const { todoList, filterType } = this.state;

    return (
      <div className="container flex">
        <h1>Todo List App</h1>
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
