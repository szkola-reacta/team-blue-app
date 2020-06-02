import React, { Fragment } from 'react';
// import { Router, Link } from "@reach/router";
import Search from './Components/Search';
import CategoryList from './Components/CategoryList';
import OfferList from './Components/OfferList';


import './Styles/fontello/css/fontello.css';
import './App.scss';

function App() {
  const categories = [
    {
      name: "Motoryzacja",
      icon: "icon-cab"
    }, {
      name: "Nieruchomości",
      icon: "icon-building-filled"
    }, {
      name: "Praca",
      icon: "icon-suitcase"
    }, {
      name: "Elektronika",
      icon: "icon-mobile"
    }
  ];

  return (
    <Fragment>
      <Search />
      <CategoryList categories={categories} />
      <OfferList />
    </Fragment>
  );
}

export default App;