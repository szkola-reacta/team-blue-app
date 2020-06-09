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
    <Container className="category-list" fluid>
      <Row className="category-row">
        { categories.map((element, index) =>
            <Col key={`category-${index}`} xs={12} sm={12} md={6} lg={3} xl={3}>
            <Link className="link-style" to={`/api/categories/${element.id}/offers`}>
              <Category {...element}  />
            </Link>
          </Col>
        )}
        <Router>
          <OfferList path={`/api/categories/:id/offers`} />
        </Router>
      </Row>
    </Container>
  );
}

export default CategoryList;