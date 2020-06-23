import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import portrait from '../img/portrait.jpg';

function About() {
  return (
    <div id="about">
      <Container-fluid>
        <Row>
          <Col md={5} className="portrait">
            <ScrollAnimation animateIn="flipInY">
              <img src={portrait} alt="Cyril Blondeau"></img>
            </ScrollAnimation>
          </Col>
          <Col md={7} className='about-content'>
            <div className="cadre">
              <div className="about-content-description ">
                <ScrollAnimation animateIn="rotateInDownLeft"  delay="100">
                  <h2>à propos</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="rotateInDownLeft"  delay="100">
                  <h3>Graphiste web & print basé à Bordeaux</h3>
                </ScrollAnimation>
                <ScrollAnimation animateIn="rotateInUpRight" delay="300">
                  <p>Passionné depuis tout jeune par les arts graphiques, c’est naturellement que je me dirige vers des études d’arts appliqués, et un BTS en communication visuelle à L’École Nationale des Arts Appliqués Duperré à Paris.</p>
                  <p>Fort de mes compétences fraîchement acquises, je fais mes armes en agence de communication, de 2001 à 2008. Je passe ensuite chez l’annonceur, puis en freelance.</p>
                  <p>Curieux, à l’écoute, et doté d'un fort sens de l'esthétique, je m’adapte à tous types de projets.<br />
                  Mes notions en langage Javascript et sur la bibliothèque React JS, me permettent d'échanger avec les développeurs.</p>
                </ScrollAnimation>
              </div>
            </div>	
          </Col>
        </Row>
      </Container-fluid>
    </div>  
  );
}

export default About;     