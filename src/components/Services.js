import React from 'react';

import ai from '../img/ai.svg';
import ps from '../img/ps.svg';
import id from '../img/id.svg';
import js from '../img/js.svg';
import react from '../img/react.svg';
import sass from '../img/sass.svg';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/1cbaj5")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.services
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <div className="services" id="services">
          <h2>Services</h2>
          <ul className="services-description">
              {items.map(item => (
                <li key={item.titre}>
                  <img src={item.image} alt={item.titre} />
                  <h3>{item.titre}</h3> 
                  <span className="divider"></span> 
                  <p>{item.description}</p>
                </li>
              ))}
          </ul>
          <ul className="list-logos">
            <li><img src={ai} alt="Adobe Illustrator"></img></li>
            <li><img src={ps} alt="Adobe Photoshop"></img></li>
            <li><img src={id} alt="Adobe InDesign"></img></li>
            <li><img src={js} alt="Javascript"></img></li>
            <li><img src={react} alt="React"></img></li>
            <li><img src={sass} alt="SCSS"></img></li>
          </ul>
        </div>
      );
    }
  }

}

export default Services;
