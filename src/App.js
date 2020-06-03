import React, { Fragment, useState, useEffect } from 'react';

import './App.scss';

import Search from './components/Search';
import CategoryList from './components/CategoryList';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, [])

  return (
    <Fragment>
      <Search />
      <CategoryList categories={categories} />
    </Fragment>
  );
}

export default App;
