import React from 'react';
import { Link } from '@reach/router';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
import logoPlaceholder from '../../../images/logo-placeholder.svg';
import './Header.scss';

function Header() {
    return(
        <div className="header">
            <Image src={logoPlaceholder} alt="logo" />
            <Link to="signup"><Button color="primary">Sign up</Button></Link>
        </div>
    );
}

export default Header;