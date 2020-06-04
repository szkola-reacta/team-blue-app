import React from 'react'

import { Map, TileLayer } from 'react-leaflet'
import { Container, Row, Col } from 'react-bootstrap'
import './map.css'

import Figure from './../../atoms/figure'
import Button from './../../atoms/button'


const OfferContact = (props) => {
	const latlng = {
      lat: 51.358,
      lng: 21.341
    }
	return (
			<Col>
				<Row className="p-4">
					<Col>
						<Figure src="https://gallery.dpcdn.pl/imgc/UGC/85487/g_-_-x-_-_-_x5b137a2c-9a30-4067-84fa-bc71678fab09.jpg" className="rounded-circle" />
					</Col>
					<Col>
						<Row className="p-4">
							<h2>John Dee</h2>
						</Row>
						<Row>
							<Col>
								<Button>Call</Button>
							</Col>
							<Col>
								<Button>Message</Button>
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
					<p>Lublin, Lubelskie</p>
				</Row>
			</Col>

	)
}

export default OfferContact
