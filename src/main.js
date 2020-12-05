import React from 'react';
import ReactDom from 'react-dom';
import App from './app/app.js';
// import App from './app-lazy.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(<App/>, document.querySelector("#app"));