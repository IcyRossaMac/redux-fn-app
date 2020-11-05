import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './App';
import reducer from './store/reducer'
import reportWebVitals from './reportWebVitals';

// Create a store
// A redux store is where your app's state lives
const store = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root")

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
