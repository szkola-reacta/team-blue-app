import React from 'react';

import './Footer.scss';

function Footer() {
    const date = new Date();

    return (
        <div className="footer">
            <p>Copyright {date.getFullYear()} @ <a href="https://blueteam.com">BlueTeam</a></p>
        </div>
    );
}

export default Footer;