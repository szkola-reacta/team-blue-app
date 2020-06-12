<<<<<<< HEAD
import React, { Fragment, useState, useEffect } from 'react';

import Search from './components/Search';
import CategoryList from './components/CategoryList';
=======
import React, { useState, useEffect } from 'react';

>>>>>>> master
import './App.scss';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home/';
import OfferList from './Components/OfferList';

<<<<<<< HEAD
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <Fragment>
      <Search />
      <CategoryList categories={categories} />
    </Fragment>
=======
function App() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch(`api/categories/1/offers`)
      .then(response => response.json())
      .then(data => setOffers(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Content>
        <Home path="/" />
        <OfferList path="/offers" offers={offers} />
      </Content>
      <Footer />
    </div>
>>>>>>> master
  );
}

export default App;