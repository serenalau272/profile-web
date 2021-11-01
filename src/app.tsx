import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from './styling/global'
import Home from './pages';

const App: React.FC = ()=> {
  return (
    <>
      <GlobalStyle />
          <Router>
            <Home />
          </Router>
    </>
  );
}

export default App; 
