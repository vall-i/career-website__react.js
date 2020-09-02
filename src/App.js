import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import PersonPage from './components/pages/PersonPage/PersonPage';
import ArticlePage from './components/pages/ArticlePage/ArticlePage';
import HomePage from './components/pages/HomePage/HomePage';

import './App.scss';

const App = () => {
  return (
      <Layout>
        <Route path='/' exact component={HomePage} />
        <Route path='/person' component={PersonPage} />
        <Route path='/article' component={ArticlePage} />
      </Layout>
  );
}

export default App;
