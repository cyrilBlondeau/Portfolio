import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import portrait from '../img/portrait.jpg';

function About() {
  return (
    <div className="about" id="about">
      <Container-fluid>
        <Row>
          <Col md={5} className="portrait">
            <img src={portrait} alt="Cyril Blondeau"></img>
          </Col>
          <Col md={7} className='about-content'>
            <div class="about-content-description">
              <h2>à propos</h2>
              <p>
                Passionné depuis tout jeune par le dessin, c’est naturellement que je me dirige vers des études d’arts appliqués, et un BTS en communication visuelle à l’Ecole Nationale des Arts Appliqués Duperré à Paris.
                Fort de mes compétences fraîchement acquises, je fais mes armes en agence de communication, pendant 7 ans. Je passe ensuite chez l’annonceur, et aujourd’hui en freelance. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>	
          </Col>
        </Row>
      </Container-fluid>
    </div>  
  );
}

export default About;     