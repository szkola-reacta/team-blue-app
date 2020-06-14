
import React, { useState, useEffect } from 'react';

import './App.scss';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Home from './components/pages/home/Home';
import OfferList from './components/OfferList'
import Offer from './components/pages/Offer';
import Page404 from './Components/Pages/Page404';

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
        <Offer path="/offer/:id"/>
        <Page404 path="/404" default />
      </Content>
      <Footer />
    </div>
  );
}

export default App;