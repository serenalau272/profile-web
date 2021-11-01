import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalFonts from './styling/fonts/index'

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
