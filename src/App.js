
import React, { useState, useEffect } from 'react';

import './App.scss';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import OfferList from './Components/OfferList'
import Offer from './Components/Pages/Offer';
import Page404 from './Components/Pages/Page404';

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Home path="/" />
        <OfferList path="/categories/:id/offers" />
        <Offer path="/offer/:id"/>
        <Page404 path="/404" default />
      </Content>
      <Footer />
    </div>
  );
}

export default App;