import React from 'react';
import { render } from '@testing-library/react';

import Content from './Content';

test('render content', () => {
  const { container } = render(<Content />);
  expect(container).toBeInTheDocument();
});
