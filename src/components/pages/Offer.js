import React, { useState, useLayoutEffect } from 'react'

import { Container, Col, Row } from 'react-bootstrap'

import OfferContact from './../organisms/offerContact'

import logo from './../../images/logo-placeholder.svg'

import './pages.scss'

const Offer = () => {
  const [offer, setOffer] = useState({})

  useLayoutEffect(() => {
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
          <button className="btn btn-primary float-right m-4">
            Sign in
          </button>
        </Col>
      </Row>
      <Row>
        <Col xs="8">
          <Row>
            <button className="btn btn-outline-secondary m-4">
              Back
            </button>
          </Row>
          <figure className="text-center">
            <img className="offerImage" src={offer.thumbnail_url} alt="error" />
          </figure>
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
      <footer className="p-4 align-middle border-top">&copy; Team Blue</footer>
    </Container>
  )
}

export default Offer