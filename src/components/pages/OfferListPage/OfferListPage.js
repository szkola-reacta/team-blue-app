import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import Button from 'react-bootstrap/Button';

import Search from '../../Search';
import OfferList from '../../OfferList';
import NotFoundMessage from '../../NotFoundMessage';
import '../styles.scss';


function OfferListPage({ categoryID }) {
  const [categoryName, setCategoryName] = useState('');
  const [offers, setOffers] = useState([]);
  const [categoryNotFound, setCategoryNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/categories/${categoryID}`)
      .then(response => response.json())
      .then(data => setCategoryName(data.name))
      .catch(() => setCategoryNotFound(true));

    fetch(`/api/categories/${categoryID}/offers`)
      .then(response => response.json())
      .then(data => setOffers(data))
      .catch(() => setCategoryNotFound(true));
  }, [categoryID]);

  const handleBackClick = (event) => {
    event.preventDefault();
    navigate(-1);
  }

  let pageContent;

  if (categoryNotFound) {
    pageContent = <NotFoundMessage message="Podana kategoria nie została odnaleziona." />
  } else {
    pageContent = <OfferList offers={offers} />
  }

  return (
    <div className="page">
      <Search />
      <div className="page__header">
        <Button variant="outline-primary" onClick={handleBackClick}>&lt; Back</Button>
        <h4>{categoryName}</h4>
      </div>
      {pageContent}
    </div>
  );
}

export default OfferListPage;