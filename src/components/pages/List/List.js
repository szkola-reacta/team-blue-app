import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import Button from 'react-bootstrap/Button';

import Search from '../../Search';
import OfferList from '../../OfferList';
import '../styles.scss';

function List({ categoryID }) {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch(`/api/categories/${categoryID}/offers`)
      .then(response => response.json())
      .then(data => setOffers(data));
  }, [categoryID]);

  const handleBackClick = (event) => {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <div className="page">
      <Search />
      <div className="page__content">
        <Button variant="outline-primary" onClick={handleBackClick}>&lt; Back</Button>
        <OfferList offers={offers} />
      </div>
    </div>
  );
}

export default List;