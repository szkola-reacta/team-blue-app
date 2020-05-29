import React, { Fragment } from 'react';
import Search from './Components/Search';
import CategoryList from './Components/CategoryList';


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
    </Fragment>
  );
}

export default App;
