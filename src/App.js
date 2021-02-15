import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Keynote from './pages/Keynote';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/keynote">
            <Keynote />
          </Route>

          <Route path="/addresses">
            <Keynote />
          </Route>
          <Route path="/plenaries">
            <Keynote />
          </Route>
          <Route path="/faq">
            <Keynote />
          </Route>
          <Route path="/schedule">
            <Keynote />
          </Route>
          <Route path="/contact">
            <Keynote />
          </Route>
          <Route path="/team">
            <Keynote />
          </Route>
          <Route path="/startups">
            <Keynote />
          </Route>
          <Route path="/sprint">
            <Keynote />
          </Route>
          <Route path="/">
            <Keynote />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
