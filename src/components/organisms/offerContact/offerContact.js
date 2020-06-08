import React from 'react'

import { Map, TileLayer } from 'react-leaflet'
import { Row, Col } from 'react-bootstrap'

import './map.css'

const OfferContact = ({offer}) => {

  let latlng ={}

  offer.location != null?
  	latlng = {
      lat: offer?.location?.latitude,
      lng: offer?.location?.longitude
    }
  :
  latlng = {
	lat: 51,
	lng: 30
  };
  return (
	<Col>
	  <Row className="p-4">
	    <Col>
		  <figure>
		  	<img className="rounded-circle" src="https://gallery.dpcdn.pl/imgc/UGC/85487/g_-_-x-_-_-_x5b137a2c-9a30-4067-84fa-bc71678fab09.jpg" alt="not found" />
		  </figure>
		</Col>
		<Col>
		  <Row className="p-4">
		    <h2>{offer?.seller?.name}</h2>
		  </Row>
		  <Row>
			<Col className="p-0 m-0 text-center">
		      <button className="btn btn-outline-secondary">
				Call
			  </button>
			</Col>
			<Col className="p-0 m-0 text-left">
			  <button className="btn btn-outline-secondary">
				Message
			  </button>
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
		</Map>
	  </Row>
	  <Row className="p-4">
		<p>{offer.city}</p>
	  </Row>
	</Col>
	)
}


export default OfferContact
