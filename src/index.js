import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';
import {AppRouter} from './routers/AppRouter';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
