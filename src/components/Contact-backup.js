import React, { Component } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import map from '../img/map.svg';
import email from '../img/email.svg';
import phone from '../img/phone.svg';

const API_PATH = './contact_form_handler.php';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  render() {
    return(
      <div id="contact">
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
                <form action="/contact_form_handler.php">
                  <input 
                    type="text" id="name" name="name" placeholder="* Votre nom"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                  <input
                    type="email" id="email" name="email" placeholder="* Votre email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <textarea 
                    id="message" name="message" placeholder="* Votre message"
                    onChange={e => this.setState({ message: e.target.value })}
                    value={this.state.message}
                  ></textarea>
                  <input type="submit" onClick={e => this.handleFormSubmit(e)} value="ENVOYER" className="submit" />
                  <div>
                    {this.state.mailSent &&
                      <div>Thank you for contcting us.</div>
                    }
                  </div>
                </form>
              </div>
            </Col>

            <Col lg={6} className="contact-location">
              <p>Je suis basé à <b>Bordeaux</b>, mais je peux aussi me déplacer à Paris.</p>
              <img src={map} alt="Graphiste webdesigner, Bordeaux - Paris" />
            </Col>
            
          </Row>
        </Container-fluid>
      </div>
    )
  }

  handleFormSubmit( event ) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
    console.log(this.state);
  }

}

export default Contact; 