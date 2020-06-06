import React, { useState, useEffect } from 'react';

import './App.scss';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import List from './Components/Pages/List';

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
        <List path="/categories/:categoryID"/>
      </Content>
      <Footer />
    </div>
  );
}

export default App;