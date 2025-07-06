import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './Components/LocalStorageData/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Provider store={store}>
    <App />
  </React.Provider>
);
