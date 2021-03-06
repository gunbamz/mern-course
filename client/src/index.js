import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

// imports css file into project -- no variable needed
import 'materialize-css/dist/css/materialize.min.css';

import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector("#root")
);
