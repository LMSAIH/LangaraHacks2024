import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StocksContextProvider } from './context/stocksContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StocksContextProvider>
      <App />
    </StocksContextProvider>
  </React.StrictMode>
)