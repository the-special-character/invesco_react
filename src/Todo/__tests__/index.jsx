import React from 'react';
import { render } from '@testing-library/react';
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
});
