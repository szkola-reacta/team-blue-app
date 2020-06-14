import React from 'react';
import { render } from '@testing-library/react';

import OfferListPage from './OfferListPage';

test('render offer list page', () => {
  const { container } = render(<OfferListPage />);
  const searchContainer = container.querySelector('.search');
  const categoryListContainer = container.querySelector('.offer-list');

  expect(searchContainer).toBeInTheDocument();
  expect(categoryListContainer).toBeInTheDocument();
});