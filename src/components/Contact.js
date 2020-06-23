import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Form from './Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import contact from '../img/contact.jpg';
import email from '../img/email.svg';
import phone from '../img/phone.svg';

class Contact extends Component {

  render() {
    return(
      <div id="contact">
        <ScrollAnimation animateIn="fadeInDown">
          <h2>Contact</h2>
        </ScrollAnimation>
        <Container-fluid>
          <Row>

          <Col lg={6}>
              <div className="contact-location">
                <ScrollAnimation animateIn="flipInY" duration="2">
                  <img src={contact} alt="Graphiste webdesigner, Bordeaux - Paris" />
                </ScrollAnimation>
              </div>
            </Col>

            <Col lg={6} className="contact-form">
              <div>
                <Row className="contact-infos">
                  <Col sm={6} lg={7}>
                    <ul>
                      <li>
                        <ScrollAnimation animateIn="flipInY" delay="200" duration="2"><img src={email} alt="Email" /></ScrollAnimation>
                      </li>
                      <li>
                        <ScrollAnimation animateIn="fadeInUp" delay="300">blondeau.cyril@gmail.com</ScrollAnimation>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} lg={5}>
                    <ul>
                      <li>
                      <ScrollAnimation animateIn="flipInY" delay="400" duration="2"><img src={phone} alt="Téléphone" /></ScrollAnimation>
                      </li>
                      <li>
                      <ScrollAnimation animateIn="fadeInUp" delay="500">06 52 53 18 02</ScrollAnimation>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <ScrollAnimation animateIn="fadeIn" delay="600">
                  <Form />
                </ScrollAnimation>
              </div>
            </Col>
            
          </Row>
        </Container-fluid>
      </div>
    )
  }

}

export default Contact; 