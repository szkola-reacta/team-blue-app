import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Background from './bg.jpg';

import './Search.scss';

function Search() {
  const searchStyle = {
    backgroundImage: `url(${Background})`,
    opacity: 0.85
  }

  return (
    <Container className="search" style={searchStyle} fluid>
       <Row>
          <Col sm={12} md={10} lg={10} xl={10}>
              <FormControl type="text" placeholder="Search..." className="search-bar mr-sm-2" />
          </Col>
          <Col md={2} lg={2} xl={2} className="pl-md-6">
              <Button type="submit" value="Search" variant="primary">Search</Button>
          </Col>
       </Row>
    </Container>
  );
}

export default Search;