import React from 'react';
import { navigate } from '@reach/router';

import './Category.scss';

function Category({ name, icon, id }) {

  const handleCategoryClick = (event) => {
    navigate(`/categories/${id}/offers`);
  }

  return (
    <div className="category" xs={12} md={6} lg={3} xl={3} onClick={handleCategoryClick}>
      <i className={icon} />
      <span className="category-name">{name}</span>
    </div>
  );
}

export default Category;
