import React, { memo } from 'react';
import PropTypes from 'prop-types';

function TodoFilter({ filterTodo }) {
  return (
    <div className="screenWidth flex">
      <button
        className="flex-1"
        type="button"
        name="all"
        onClick={filterTodo}
      >
        All
      </button>
      <button
        className="flex-1"
        type="button"
        name="pending"
        onClick={filterTodo}
      >
        Pending
      </button>
      <button
        className="flex-1"
        type="button"
        name="completed"
        onClick={filterTodo}
      >
        Completed
      </button>
    </div>
  );
}

TodoFilter.propTypes = {
  filterTodo: PropTypes.func.isRequired,
};

export default memo(TodoFilter);
