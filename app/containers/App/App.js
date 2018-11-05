/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import StartPage from 'containers/StartPage/Loadable';
import ListPage from 'containers/ListPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import UsersPage from 'containers/UsersPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import './style.scss';

const App = () => (
  <div>
    <Helmet
      titleTemplate="%s - Assignment"
      defaultTitle="Assignment"
    >
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={UsersPage} />
      <Route exact path="/start" component={StartPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/list" component={HomePage} />

      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
