import React from 'react';
import { Link } from '@reach/router';

import './Page404.scss';
import '../styles.scss';

function Page404 () {
  return (
    <div className="page page__404">
      <p>Podana strona nie została odnaleziona</p>
      <Link to="/">Wróć do strony głównej</Link>
    </div>
  );
}

export default Page404;