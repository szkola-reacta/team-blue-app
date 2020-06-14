import React, { useState, useEffect } from 'react';

import Search from '../../Search';
import CategoryList from '../../CategoryList';
import '../styles.scss';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
    .then(response => response.json())
    .then(data => setCategories(data));
    }, [])

  return (
    <div className="page">
      <Search />
      <div className="page__content">
        <CategoryList categories={categories} />
      </div>
    </div>
  );
}

export default Home;
