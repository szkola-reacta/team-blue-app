import React, { useState, useEffect } from 'react'

import { Container, Col, Row, Button } from 'react-bootstrap'

import OfferContact from './../organisms/offerContact'
import Footer from '../organisms/Footer'

import logo from './../../images/logo-placeholder.svg'

import './pages.scss'

const Offer = () => {
  const [offer, setOffer] = useState({})

  useEffect(() => {
    fetch("/api/offers/1")
    .then(response => response.json())
    .then(data => setOffer(data))
    }, [offer.id])

  return (
    <Container fluid>
      <Row className="border-bottom">
        <Col>
          <img className="logo float-left m-3" src={logo} alt="er" />
        </Col>
        <Col>
          <Button variant="primary" className="float-right m-4">
            Sign in
          </Button>
        </Col>
      </Row>
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
      <Footer />
    </Container>
  )
}

export default Offer