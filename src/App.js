import React from 'react';

import './App.scss';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home/';

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Home path="/" />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
