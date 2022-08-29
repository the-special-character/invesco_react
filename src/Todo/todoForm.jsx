import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodo }, ref) => {
  console.log('TodoForm');
  return (
    <form onSubmit={addTodo}>
      <input
        data-testid="todo_text"
        ref={ref}
        type="text"
        placeholder="Write your todo here..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
});

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default memo(TodoForm);
