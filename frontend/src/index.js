import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StocksContextProvider } from './context/stocksContext';
import { AuthContextProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <StocksContextProvider>
        <App />
      </StocksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)