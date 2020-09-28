import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import PersonPage from './components/pages/PersonPage/PersonPage';
import ArticlePage from './components/pages/ArticlePage/ArticlePage';
import HomePage from './components/pages/HomePage/HomePage';

import './App.scss';

const App = () => {
  return (
      <Layout>
        <Switch>
          <Route path='/person' component={PersonPage} />
          <Route path='/article' component={ArticlePage} />
          <Route path='/' exact component={HomePage} />
          <Redirect to='/'/>
        </Switch>
      </Layout>
  );
}

export default App;
