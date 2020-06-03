import React from 'react';
import { render } from '@testing-library/react';

import Home from './Home';

test('render Home page', () => {
    const { container } = render(<Home />);
    const searchContainer = container.querySelector('.search');
    const categoryListContainer = container.querySelector('.category-list');

    expect(searchContainer).toBeInTheDocument();
    expect(categoryListContainer).toBeInTheDocument();
});