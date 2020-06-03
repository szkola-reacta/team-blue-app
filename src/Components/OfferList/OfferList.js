import React from 'react';
import Offer from '..//OfferTile/Offer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import './OfferList.scss';

function OfferList() {
  return (
    <Container className="offer-list" fluid>
      <Row className="offer-row">
      <Offer />
        {/* {offers.map((element, index) =>
          <Col key={`offer-${ index }`} xs={12} sm={12} md={6} lg={3} xl={3}>
            <Offer {...element} />
          </Col>
        )} */}
      </Row>
    </Container>
  );
}

export default OfferList;