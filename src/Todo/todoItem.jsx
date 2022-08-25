import React, { memo } from 'react';
import PropTypes from 'prop-types';

function TodoItem({
  item,
  toggleCompleteTodo,
  deleteTodo,
}) {
  return (
    <div
      data-testid="todo-item"
      key={item.id}
      className="todoItem flex"
    >
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => toggleCompleteTodo(item)}
      />
      <p className="flex-1">{item.text}</p>
      <button
        type="button"
        onClick={() => deleteTodo(item)}
      >
        Delete
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  toggleCompleteTodo: PropTypes.func.isRequired,
  item: PropTypes.exact({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
};

export default memo(TodoItem);
