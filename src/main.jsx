import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/global.css'; // Ruta actualizada
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
