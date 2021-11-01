import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GlobalStyle from './styling/global'
import Home from './pages';

const App: React.FC = ()=> {
  return (
    <>
      <GlobalStyle />
          <Router>
            <Switch>
              <Route path="/" component={Home} exact />
            </Switch>
          </Router>
    </>
  );
}

export default App; 
