import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
