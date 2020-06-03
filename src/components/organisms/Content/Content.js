import React from 'react';
import { Router } from '@reach/router';

function Content(props) {
  return (
    <Router className="content">
      {props.children}
    </Router>
  );
}

export default Content;
