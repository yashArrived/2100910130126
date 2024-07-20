
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/product/:name" component={ProductPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </Router>
);

export default App;