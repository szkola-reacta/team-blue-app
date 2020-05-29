import React from 'react';

import './Footer.scss';

function Footer() {
    const date = new Date();

    return (
        <div className="footer">
            <p>Copyright {date.getFullYear()} @ BlueTeam</p>
        </div>
    );
}

export default Footer;