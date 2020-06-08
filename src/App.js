import React from 'react';

import './App.scss';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import OfferListPage from './Components/Pages/OfferListPage';
import NotFoundMessage from './Components/NotFoundMessage';

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Home path="/" />
        <OfferListPage path="/categories/:categoryID/offers" />
        <NotFoundMessage message="Podana strona nie została odnaleziona" default />
      </Content>
      <Footer />
    </div>
  );
}

export default App;