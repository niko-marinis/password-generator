import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './style.css';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster></Toaster>
  </StrictMode>,
)
