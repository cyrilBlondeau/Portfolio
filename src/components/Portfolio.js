import React from 'react';
import Modal from 'react-bootstrap/Modal';

import check from '../img/check.svg';
import close from '../img/close.svg';

class Portfolio extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      activeItem: {vignette:[], client:"", categorie:[], description:"", images:[]},
      show: false
    }

    this.handleShow = (item) => {
      this.setState({activeItem:item}, () => this.setState({ show: true }));
    };
    
    this.handleClose = () => {
      this.setState({ show: false });
    }

  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/1cs7k5")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.portfolio
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
    const {error, isLoaded, items, activeItem} = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <div id="portfolio">
          <h2>Portfolio</h2>
          <ul className="portfolio-list">
            {items.map(item => (
              <li key={item.client}>
                <div className="vignette">
                  <button onClick={ () => this.handleShow(item)}>
                    <h4>{item.client}</h4>
                    <div className="filtre"></div>
                    <img src={item.vignette} alt={item.titre} className="project-vignette" />
                  </button>
                </div>
              </li>
            ))}
            <Modal show={this.state.show} onHide={ () => this.handleClose()}>
              <Modal.Header>
                <h3>{activeItem.client}</h3>
                <button className="close" onClick={ () => this.handleClose()}><img src={close} alt="Fermer" /></button>
              </Modal.Header>
              <Modal.Body>
                <div className="project">
                  <p>{activeItem.description}</p>
                  <ul className="categories">
                    {activeItem.categorie.map(categorie => (
                      <li key={categorie}>
                        <img src={check} alt="Check" />{categorie}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-images">
                    {activeItem.images.map(image => (
                      <li key={image}>
                        <img src={image} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="close" onClick={ () => this.handleClose()}><img src={close} alt="Fermer" /></button>
              </Modal.Footer>
            </Modal>
          </ul>
        </div>
      );
    }
  }
}

export default Portfolio;