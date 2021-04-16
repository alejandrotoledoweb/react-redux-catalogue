import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './components/about';
import Detail from './containers/details';
import Navbar from './containers/navbar';
import Shop from './components/shop';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <main className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/detail" component={Detail} />
        <Route path="/category/:id" component={Home} />
        <Route path="/photos/:dogId" component={Detail} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;
