import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import Login from './components/Loginpage.jsx';
import SignUp from './components/Signup.jsx';
import './styles/normalize.css';
import './styles/styles.scss';

import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { Router, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// enable redux chrome dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// thunkMiddleware allows use dispatch() functions in child components
const store = createStore(
  rootReducer, // add routerReducer
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// history props for Router!!!

// wrap react app with Provider to connect reducers with child components
render(<Provider store={store}>
    <Router history={history}>
      <div>
        <Route path={'/'} exact component={App} />
        <Route path={'/login'} component={Login} />
        <Route path={'/signup'} component={SignUp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app'));
