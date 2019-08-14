import React, { Component } from 'react';

import Form from './Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import map from '../img/map.svg';
import email from '../img/email.svg';
import phone from '../img/phone.svg';

class Contact extends Component {

  render() {
    return(
      <div className="contact" id="contact">
        <h2>Contact</h2>
        <Container-fluid>
          <Row>

            <Col lg={6} className="contact-form">
              <Row>
                <Col  sm={6} lg={7}>
                  <ul>
                    <li><img src={email} alt="Email" /></li>
                    <li>blondeau.cyril@gmail.com</li>
                  </ul>
                </Col>
                <Col  sm={6} lg={5}>
                  <ul>
                    <li><img src={phone} alt="Téléphone" /></li>
                    <li>06 52 53 18 02</li>
                  </ul>
                </Col>
              </Row>
              <div>
                <Form />
              </div>
            </Col>

            <Col lg={6} className="contact-location">
              <img src={map} alt="Graphiste webdesigner, Bordeaux - Paris" />
            </Col>
            
          </Row>
        </Container-fluid>
      </div>
    )
  }

}

export default Contact; 