import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Offer from '../OfferTile';
import './OfferList.scss';
import '../OfferTile/Offer.scss';

function OfferList({ offers }) {
  return (
    <Container className="offer-list">
      <Row className="offer-row">
        {offers.map((element, index) =>
          <Col key={offers.id}>
            <Offer {...element} />
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default OfferList;