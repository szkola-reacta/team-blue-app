import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Router, Link } from '@reach/router';

import OfferList from '../OfferList';
import Category from '../Category';
import './CategoryList.scss';
import '../OfferList/OfferList.scss';

function CategoryList({ categories }) {
  return (
    <Container className="category-list">
      <Row className="category-row">
        { categories.map((element, index) =>
          <Col key={`category-${index}`} xs={12} sm={12} md={6} lg={3} xl={3}>
            <Link className="link-style" to={`/categories/${element.id}/offers`}>
              <Category {...element} />
            </Link>
          </Col>
        )}
        <Row className="offer-row">
          <Col>
            <Router>
              <CategoryList path="/categories/" />
              <OfferList path="/categories/:id/offers" />
            </Router>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default CategoryList;