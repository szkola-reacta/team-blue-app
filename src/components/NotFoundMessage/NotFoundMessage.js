import React from 'react';
import { Link } from '@reach/router';

function NotFoundMessage ({ children, message }) {
  let content;

  if (message) {
    content = <p>{message}</p>
  } else {
    content = children;
  }

  return (
    <div className="text-center">
      {content}
      <Link to="/">Wróć do strony głównej</Link>
    </div>
  );
}

export default NotFoundMessage;