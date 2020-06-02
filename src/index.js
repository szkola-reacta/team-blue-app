import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { makeServer } from "./server"

makeServer({ environment: 'development' })

ReactDOM.render(
  <App />,
  document.getElementById('root')
);