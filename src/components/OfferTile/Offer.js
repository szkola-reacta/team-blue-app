import React from 'react';

import './Offer.scss';

function Offer({ thumbnail_url, name, price, city, added_at, id }) {
  return (
    <div className="offer">
      <div className="offer-thumbnail">
        <img src={thumbnail_url} alt="thumbnail" />
      </div>
        <span className="offer-name">{name}</span>
        <span className="offer-price">{price}</span>
        <span className="offer-location-date">{city}  {added_at}</span>
        <span>offer id: {id}</span>
    </div>
  );
}

export default Offer;