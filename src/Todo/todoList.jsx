import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

function TodoList({
  todoList,
  toggleCompleteTodo,
  deleteTodo,
}) {
  console.log('TodoList');
  return (
    <div className="screenWidth flex-1">
      {todoList.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          toggleCompleteTodo={toggleCompleteTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  toggleCompleteTodo: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default memo(TodoList);
