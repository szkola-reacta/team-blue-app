import React, { Fragment, useState, useEffect } from 'react';

import Search from './components/Search';
import CategoryList from './components/CategoryList';
import './App.scss';

function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <Fragment>
      <Search />
      <CategoryList categories={categories} />
    </Fragment>
  );
}

export default App;