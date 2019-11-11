import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';

import './App.css';
import Homepage from './Homepage/Homepage';
import { history } from './history';
import { store } from './store';
import { ProductDetailsPage } from './ProductDetailsPage/ProductDetailsPage';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route component={ProductDetailsPage} path="/product" />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}
export default App;
