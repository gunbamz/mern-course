import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

// imports css file into project -- no variable needed
import 'materialize-css/dist/materialize.min.css';

import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector("#root")
);
