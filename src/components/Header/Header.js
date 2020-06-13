import React from 'react';
import { Link } from '@reach/router';

import Image from 'react-bootstrap/Image';
import logo from '../../images/logo-placeholder.svg';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <Image src={logo} alt="logo" />
      <Link to="signup" className="btn btn-primary">Sign up</Link>
    </div>
  );
}

export default Header;
