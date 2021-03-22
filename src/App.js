import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { UserReceipts } from './components/UserReceipts';
import { LogUser } from './components/LogUser';
import { NewReceipts } from './components/NewReceipts';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/user-receipts' component={UserReceipts} />
        <Route path='/log-in' component={LogUser} />
        <Route path='/new-receipts' component={NewReceipts} />
      </Layout>
    );
  }
}
