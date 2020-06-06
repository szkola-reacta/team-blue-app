import React from 'react';
import { render } from '@testing-library/react';

import List from './List';

test('render Home page', () => {
  const { container } = render(<List />);
  const searchContainer = container.querySelector('.search');
  const categoryListContainer = container.querySelector('.offer-list');

  expect(searchContainer).toBeInTheDocument();
  expect(categoryListContainer).toBeInTheDocument();
});