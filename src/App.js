import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Keynote from './pages/Keynote';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <header>
        <Header />
      </header>
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
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default App;
