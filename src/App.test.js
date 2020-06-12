import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  const header = container.querySelector('.header');
  const content = container.querySelector('.content');
  const footer = container.querySelector('.footer');

  expect(header).toBeInTheDocument();
  expect(content).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
