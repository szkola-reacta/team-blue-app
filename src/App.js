import React, { Fragment, useState, useEffect } from 'react';

import Search from './components/Search';
import CategoryList from './components/CategoryList';
import OfferList from './components/OfferList';
import './App.scss';

function App() {

  const [categories, setCategories] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch('api/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
    fetch('api/categories/1/offers')
      .then(response => response.json())
      .then(data => setOffers(data));
  }, []);

  return (
    <Fragment>
      <Search />
      <CategoryList categories={categories} />
      <OfferList offers={offers} />
    </Fragment>
  );
}

export default App;
