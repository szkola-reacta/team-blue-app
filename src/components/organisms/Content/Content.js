import React from 'react';
import { Router } from '@reach/router';

//For tests. Delete it when you will need.
const Test = () => <p>content</p>;

function Content() {
    return (
        <Router className="content">
            <Test path="/" />
        </Router>
    );
}

export default Content;