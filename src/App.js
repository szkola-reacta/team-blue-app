import React, { Fragment, useState, useEffect } from 'react';

import { Router } from '@reach/router'

import Home from './components/pages/Home';
import List from './components/pages/List'
import Offer from './components/pages/Offer';
import './App.scss';

function App() {

  const [categories, setCategories] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch('api/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
    fetch(`api/categories/1/offers`)
      .then(response => response.json())
      .then(data => setOffers(data));
  }, []);

  return (
    <Fragment>
      <Router>      
        <Home path="/" categories={categories} />
        <List path="/list" offers={offers} />
        <Offer path="/offer"/>
      </Router>
      
    </Fragment>
  );
}

export default App;