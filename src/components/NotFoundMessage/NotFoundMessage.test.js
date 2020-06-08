import React from 'react';
import { render } from '@testing-library/react';

import NotFoundMessage from './NotFoundMessage';

test('render "not found" message by message props', () => {
  const { getByText } = render(<NotFoundMessage message="message" />);
  expect(getByText(/message/i)).toBeInTheDocument();
})

test('render "not found" message by children', () => {
  const { container } = render(
    <NotFoundMessage>
      <h1>Message</h1>
    </NotFoundMessage>
  );

  expect(container.querySelector('h1')).toBeInTheDocument();
})