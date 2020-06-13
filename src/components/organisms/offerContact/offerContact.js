import React from 'react'

import { Map, TileLayer, Marker } from 'react-leaflet'
import { Row, Col, Button } from 'react-bootstrap'

import './map.css'

const OfferContact = ({offer}) => {

  let latlng = {
      lat: offer?.location?.latitude || 51,
      lng: offer?.location?.longitude || 30
    }
  
  return (
	<Col>
	  <Row className="p-4">
	    <Col>
		  <figure>
		  	<img className="rounded-circle" src={offer.thumbnail_url} alt="img" />
		  </figure>
		</Col>
		<Col>
		  <Row className="p-4">
		    <h2>{offer?.seller?.name}</h2>
		  </Row>
		  <Row>
			<Col className="p-0 m-0 text-center">
		      <Button variant="outline-secondary">
				Call
			  </Button>
			</Col>
			<Col className="p-0 m-0 text-left">
			  <Button variant="outline-secondary">
			    Message
			  </Button>
			</Col>
		  </Row>
		</Col>
	  </Row>
	  <Row className="p-4">
		<Map
		className="map"
		center={latlng}
		length={4}
		zoom={10}
		>
		  <TileLayer
		  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		  />
		  <Marker position={latlng} />
		</Map>
	  </Row>
	  <Row className="p-4">
		<p>{offer.city}</p>
	  </Row>
	</Col>
	)
}


export default OfferContact
