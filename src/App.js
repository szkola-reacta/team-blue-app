import React from 'react';

import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import './App.scss';
import Content from './components/organisms/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
