import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './app/store';
import './index.css';
import ToggleModeProvider from './utils/ToggleMode';

ReactDOM.render(
  <Provider store={store}>
    <ToggleModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleModeProvider>
  </Provider>,
  document.getElementById('root'),
);
