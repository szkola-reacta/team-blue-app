import React from 'react';
import Category from '../Category/Category.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './CategoryList.scss';

function CategoryList({ categories }) {
  return (
    <Container className="category-list" fluid>
      <Row>
          {categories.map((element, index) =>
            <Category key={`category-${ index }`} {...element} />
          )}
      </Row>
    </Container>
  );
}

export default CategoryList;