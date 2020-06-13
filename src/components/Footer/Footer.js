import React from 'react';

import './Footer.scss';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <p>Copyright {year} @ <a href="https://blueteam.com">BlueTeam</a></p>
    </div>
  );
}

export default Footer;
