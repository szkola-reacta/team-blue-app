import React from 'react';

import './Offer.scss';

function Offer({ thumbnail_url, name, price, city, added_at }) {
  return (
    <div className="offer">
      <img className="offer-image-thumbnail" src={thumbnail_url} alt="thumbnail" />
      <span className="offer-name">{name}</span>
      <span className="offer-price">{price}</span>
      <span className="offer-location-date">{city}  {added_at}</span>
    </div>
  );
}

export default Offer;