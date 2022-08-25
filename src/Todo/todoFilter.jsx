import React, { memo } from 'react';
import PropTypes from 'prop-types';

function TodoFilter({ filterTodo, filterType }) {
  return (
    <div className="screenWidth flex">
      <button
        className="flex-1"
        type="button"
        name="all"
        style={{
          backgroundColor:
            filterType === 'all' ? 'dodgerblue' : 'initial',
        }}
        onClick={filterTodo}
      >
        All
      </button>
      <button
        className="flex-1"
        type="button"
        name="pending"
        style={{
          backgroundColor:
            filterType === 'pending'
              ? 'dodgerblue'
              : 'initial',
        }}
        onClick={filterTodo}
      >
        Pending
      </button>
      <button
        className="flex-1"
        type="button"
        name="completed"
        onClick={filterTodo}
        style={{
          backgroundColor:
            filterType === 'completed'
              ? 'dodgerblue'
              : 'initial',
        }}
      >
        Completed
      </button>
    </div>
  );
}

TodoFilter.propTypes = {
  filterTodo: PropTypes.func.isRequired,
  filterType: PropTypes.oneOf([
    'all',
    'pending',
    'completed',
  ]).isRequired,
};

export default memo(TodoFilter);
