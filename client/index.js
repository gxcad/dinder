import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import './styles/normalize.css';
import './styles/styles.scss';

import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

// enable redux chrome dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// thunkMiddleware allows use dispatch() functions in child components
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// wrap react app with Provider to connect reducers with child components
render(<Provider store={store}><App /></Provider>,
    document.getElementById('app'));
