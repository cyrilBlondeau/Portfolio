import React from 'react';
import Content from '../data/content.json';

import ScrollAnimation from 'react-animate-on-scroll';

import ai from '../img/ai.svg';
import ps from '../img/ps.svg';
import id from '../img/id.svg';
import jquery from '../img/jquery.svg';
import xd from '../img/xd.svg';
import bootstrap from '../img/bootstrap.svg';
import wordpress from '../img/wordpress.svg';
import sass from '../img/sass.svg';

class Services extends React.Component {
  render() {
    return (
      <div id="services">
        <ScrollAnimation animateIn="fadeInDown">
          <h2>Services</h2>
        </ScrollAnimation>
        <ul className="services-description">
          {Content.services.map(item => (
            <li key={item.titre}>
              <ScrollAnimation animateIn="flipInY" duration="2"><img src={item.image} alt={item.titre} /></ScrollAnimation>
              <ScrollAnimation animateIn="flipInY" delay="300"><h3 className="service">{item.titre}</h3></ScrollAnimation>
              <ScrollAnimation animateIn="flipInY" delay="500"><span className="divider"></span> </ScrollAnimation>
              <ScrollAnimation animateIn="flipInY" delay="700"><p>{item.description}</p></ScrollAnimation>
            </li>
          ))}
        </ul>
        {/* <ScrollAnimation animateIn="fadeIn">
          <div className="cadre">
            <div>
              <h4>Rencontrons-nous pour discuter de votre projet</h4>
            </div>
            <div className="cadre-jaune"></div>
          </div>
        </ScrollAnimation> */}
        <ul className="list-logos">
          <li>
            <ScrollAnimation animateIn="fadeIn"><img src={ai} alt="Adobe Illustrator"></img></ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation animateIn="fadeIn" delay="200"><img src={ps} alt="Adobe Photoshop"></img></ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation animateIn="fadeIn" delay="300"><img src={id} alt="Adobe InDesign"></img></ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation animateIn="fadeIn" delay="400"><img src={xd} alt="Adobe XD"></img></ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation animateIn="fadeIn" delay="500"><img src={jquery} alt="Jquery"></img></ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation animateIn="fadeIn" delay="600"><img src={bootstrap} alt="Bootstrap"></img></ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation animateIn="fadeIn" delay="600"><img src={wordpress} alt="Wordpress"></img></ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation animateIn="fadeIn" delay="700"><img src={sass} alt="SCSS"></img></ScrollAnimation>
          </li>
        </ul>
      </div>
    );
  } 
}

export default Services;
