import React from 'react';
import { render } from '@testing-library/react';

import Page404 from './Page404';

test('render 404 page', () => {
  const { getByText } = render(<Page404 />);
  expect(getByText(/Podana strona nie została odnaleziona/i)).toBeInTheDocument();
});