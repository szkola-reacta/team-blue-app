import React from 'react';


import './Offer.scss';

function Offer() {
  return (
    <div className="offer" xs={12} md={6} lg={3} xl={3}>
      <img className="offer-image-thumbnail" src="car1.jpg" alt="thumbnail" />
      <span className="offer-name">Audi super wypas 1.9 TDI, 90KM, lać i jeździć!</span>
      <span className="offer-price">20 000zł</span>
      <span className="offer-location-date">Kraków, 30.05.2020</span>
    </div>
  );
}

export default Offer;