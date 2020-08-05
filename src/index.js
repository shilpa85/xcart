import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import mySaga from './sagas'
import Routes from "./routes.js";
import './index.css';
import './sass/main.scss';
import 'react-app-polyfill/stable';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(                                     
                                      sagaMiddleware
                                      ))
);

//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store} >
    <Routes />
  </Provider>,
  document.getElementById('root')
);

