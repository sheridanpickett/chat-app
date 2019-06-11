import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }from 'react-redux';
import { createStore } from 'redux';
import loadState from './loadState';
import reducer from './reducers';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';





const persistedState = loadState()



const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace: true}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);

serviceWorker.unregister();
