import React, {h} from 'react';
import {Provider} from 'preact-redux';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from 'redux';
import Routes from './routes';
import models from './models';
import {buildReducer} from 'util/reducerBuilder';
import {buildRoot} from 'util/sagaBuilder';

let middlewareArr = [];
const sagaMiddleware = createSagaMiddleware();
middlewareArr.push(sagaMiddleware);
const enhancer = compose(applyMiddleware(...middlewareArr));
const finalCreateStore = compose(enhancer)(createStore);
const store = finalCreateStore(buildReducer(models), {}, window.devToolsExtension && window.devToolsExtension());
sagaMiddleware.run(buildRoot(models));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('app'));
