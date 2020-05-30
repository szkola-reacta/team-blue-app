import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

test('render header',() => {
    const { getByText, getByAltText } = render(<Header />);
    const logoImage = getByAltText('logo');
    const button = getByText('Sign up');

    expect(logoImage).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});