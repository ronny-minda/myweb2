import React from 'react';
import ReactDOM from 'react-dom';
import { GlabalStyle } from './components/styles/styles';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <GlabalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
