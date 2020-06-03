import React, { Fragment, useState, useEffect } from 'react';
import Search from './Components/Search';
import CategoryList from './Components/CategoryList';
import OfferList from './Components/OfferList';


import './Styles/fontello/css/fontello.css';
import './App.scss';

function App() {

  const [categories, setCategories] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch('api/categories')
    .then(response => response.json)
    .then(data => setCategories(data), );
  }, [])

  useEffect(() => {
    fetch('/categories/:id/offers')
    .then(response => response.json)
    .then(data => setOffers(data), );
  }, [])

  return (
    <Fragment>
      <Search />
      <CategoryList categories={categories} />
      <OfferList offers={offers} />
    </Fragment>
  );
}

export default App;