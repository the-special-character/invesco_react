import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoForm from '../todoForm';

const addTodo = jest.fn(e => e.preventDefault());

const inputRef = createRef();

const setup = () => {
  const props = {
    addTodo,
    ref: inputRef,
  };

  return render(<TodoForm {...props} />);
};

describe('Todo Form', () => {
  test('should render todoForm Component', () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
  });

  test('should submit form', async () => {
    setup();
    const user = userEvent.setup();
    const todoText = screen.getByTestId('todo_text');
    const submitButton = screen.getByRole('button');
    await user.type(todoText, 'Get milk');
    await user.click(submitButton);
    expect(addTodo).toBeCalledTimes(1);
    expect(addTodo).toBeCalledWith(expect.any(Object));
  });
});
