import React, { useState, useEffect } from 'react'

import { Container, Col, Row, Button } from 'react-bootstrap'

import { useParams } from '@reach/router'

import OfferContact from '../offerContact'

import './pages.scss'

const Offer = () => {

  const params = useParams()
  const [offer, setOffer] = useState({})

  useEffect(() => {
    fetch(`/api/offers/${params.id}`)
    .then(response => response.json())
    .then(data => setOffer(data))
    }, [offer.id])

  return (
    <Container fluid>
      <Row>
        <Col xs="8">
          <Row>
            <Button variant="outline-secondary" className="m-4">
              Back
            </Button>
          </Row>
          <Row className="justify-content-center">
            <img className="offer-image" src={offer.thumbnail_url} alt="error" />
          </Row>
          <div className="m-4 p-4">
            <h3>
              {offer.name}
              <br/>
              {offer.price}
            </h3>
          </div>
          <div className="m-4 p-4">
            {offer.description}
          </div>
        </Col>
        <Col xs="4">
          <OfferContact offer={offer} />
        </Col>
      </Row>
    </Container>
  )
}

export default Offer