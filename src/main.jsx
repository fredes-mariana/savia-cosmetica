import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { MenuProvider } from './context/MenuContext.jsx';
import { CarritoProvider } from './context/CarritoContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </MenuProvider>
  </React.StrictMode>
);
