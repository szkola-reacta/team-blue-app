import React, { useState, useEffect } from 'react';

import './App.scss';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Home from './components/Pages/Home/';
import OfferList from './components/OfferList';

function App() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch(`api/categories`)
      .then(response => response.json())
      .then(data => setOffers(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Content>
        <Home path="/" />
        <OfferList path="/categories/:id/offers" offers={offers} />
      </Content>
      <Footer />
    </div>
  );
}

export default App;