import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './components/about';
import Detail from './containers/details';
import Navbar from './containers/navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/detail" component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
