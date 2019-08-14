import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './css/style.css';

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <Navigation />
    <Banner />
    <Services />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </div>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
