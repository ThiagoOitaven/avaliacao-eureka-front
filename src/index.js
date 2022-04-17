import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FunctionsListProvider } from './context/FunctionsListContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FunctionsListProvider>
      <App />
    </FunctionsListProvider>
  </React.StrictMode>
);