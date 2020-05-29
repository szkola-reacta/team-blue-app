import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';

test('render footer',() => {
    const { getByText } = render(<Footer />);
    const date = new Date();
    const currentYear = date.getFullYear();
    const searchRegExp = new RegExp(currentYear,'i');

    expect(getByText(searchRegExp)).toBeInTheDocument();
});