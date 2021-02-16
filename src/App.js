import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PlenaryJSON from './data/plenary';
import Keynote from './pages/Keynote';
import Addresses from './pages/Addresses';
import Plenaries from './pages/Plenaries';
import Plenary from './pages/Plenary';
import NotFound from './pages/404';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const plenaryRoutes = PlenaryJSON.map((entry) => {
  return (
    <Route exact path={entry.path}>
      <Plenary
        title={entry.props.title}
        text={entry.props.text}
        speaker={entry.props.speakers}
      />
    </Route>
  );
});
const App = () => {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/keynote">
          <Keynote />
        </Route>
        <Route exact path="/addresses">
          <Addresses />
        </Route>
        <Route exact path="/plenaries">
          <Plenaries />
        </Route>
        {plenaryRoutes}
        <Route exact path="/faq">
          <Keynote />
        </Route>
        <Route exact path="/schedule">
          <Keynote />
        </Route>
        <Route exact path="/contact">
          <Keynote />
        </Route>
        <Route exact path="/team">
          <Keynote />
        </Route>
        <Route exact path="/startups">
          <Keynote />
        </Route>
        <Route exact path="/sprint">
          <Keynote />
        </Route>
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default App;
