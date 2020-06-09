import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Offer from '../OfferTile';
import './OfferList.scss';
import '../OfferTile/Offer.scss';

function OfferList({ id }) {

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch(`/api/categories/${id}/offers`)
      .then(response => response.json())
      .then(data => setOffers(data));
  }, [id]);

  return (
    <Container className="offer-list">
      <Row className="offer-row">
        { offers.map((element, index) =>
          <Col key={`offer-list-${index}`}>
            <Offer {...element} />
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default OfferList;