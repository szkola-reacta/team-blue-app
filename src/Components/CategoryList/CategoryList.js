import React from 'react';
import Category from '../Category/Category.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CategoryList.scss';

function CategoryList({ categories }) {
  return (
    <Container className="category-list" fluid>
      <Row className="category-row">
        {categories.map((element, index) =>
          <Col key={`category-${ index }`} xs={12} sm={12} md={6} lg={3} xl={3}>
            <Category {...element} />
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default CategoryList;