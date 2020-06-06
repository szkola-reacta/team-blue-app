import React, { useState, useEffect } from 'react';

import Search from '../../Search';
import OfferList from '../../OfferList';

function List({ categoryID }) {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch(`/api/categories/${categoryID}/offers`)
      .then(response => response.json())
      .then(data => setOffers(data));
  }, [categoryID]);

  return (
    <div className="page">
      <Search />
      <OfferList offers={offers} />
    </div>
  );
}

export default List;