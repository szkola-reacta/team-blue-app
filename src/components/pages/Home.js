import React, { useState, useEffect } from 'react';

import Search from '../Search';
import CategoryList from '../CategoryList';

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
      <CategoryList categories={categories} />
    </div>
  );
}

export default Home;
