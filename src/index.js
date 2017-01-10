import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App'

import reducer from './reducers'

import { createStore } from 'redux'
import { Provider } from 'react-redux'


const store = createStore(reducer)

console.log('store',store.getState());

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
),
  document.getElementById('root')
);
