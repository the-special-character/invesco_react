import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

function TodoList({
  todoList,
  filterType,
  toggleCompleteTodo,
  deleteTodo,
}) {
  return (
    <div className="screenWidth flex-1">
      {todoList.map(item => {
        if (
          filterType === 'all' ||
          (item.isDone && filterType === 'completed') ||
          (!item.isDone && filterType === 'pending')
        ) {
          return (
            <TodoItem
              key={item.id}
              item={item}
              toggleCompleteTodo={toggleCompleteTodo}
              deleteTodo={deleteTodo}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

TodoList.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  toggleCompleteTodo: PropTypes.func.isRequired,
  filterType: PropTypes.oneOf([
    'all',
    'pending',
    'completed',
  ]).isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default memo(TodoList);
