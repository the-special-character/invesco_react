import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from '..';

jest.mock('uuid', () => ({
  v4: () => new Date().valueOf(),
}));

describe('Todo Component', () => {
  test('should render todo component', () => {
    const { container } = render(<Todo />);
    console.log(container.childNodes);
    expect(container).toBeInTheDocument();
  });

  test('should take snapshot', () => {
    const { container } = render(<Todo />);
    expect(container.childNodes).toMatchSnapshot();
  });

  test('should add new record', async () => {
    render(<Todo />);
    const user = userEvent.setup();
    const todoText = screen.getByTestId('todo_text');
    const submitButton = screen.getByRole('button', {
      name: /Add Todo/i,
    });
    await user.type(todoText, 'Get milk');
    await user.click(submitButton);

    await user.type(todoText, 'learn react');
    await user.click(submitButton);

    const todoItems = await screen.findAllByTestId(
      'todo-item',
    );

    expect(todoItems.length).toBe(2);
  });
});
