import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import { myStore } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
