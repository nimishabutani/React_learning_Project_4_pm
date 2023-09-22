
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));



console.warn(Store)

root.render(

  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
