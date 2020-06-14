import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import Button from 'react-bootstrap/Button';

import Search from '../../Search';
import OfferList from '../../OfferList';
import '../styles.scss';


function OfferListPage({ categoryID }) {
  const [categoryName, setCategoryName] = useState('');
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`/api/categories/${categoryID}`, { signal: abortController.signal })
      .then(response => response.json())
      .then(data => setCategoryName(data.name))
      .catch(() => navigate('/404'));

    fetch(`/api/categories/${categoryID}/offers`, { signal: abortController.signal })
      .then(response => response.json())
      .then(data => {
        if (typeof(data) === Array) {
          setOffers(data)
        }
      })
      .catch(() => navigate('/404'));

    return () => {
      abortController.abort();
    }
  }, [categoryID]);


  const handleBackClick = (event) => {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <div className="page">
      <Search />
      <div className="page__header">
        <Button variant="outline-primary" onClick={handleBackClick}>&lt; Back</Button>
        <h4>{categoryName}</h4>
      </div>
      <OfferList offers={offers} />
    </div>
  );
}

export default OfferListPage;