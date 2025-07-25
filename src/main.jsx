import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-toastify/ReactToastify.css'
import './index.css';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position='top-center' autoClose={1500}/>
    <App />
  </React.StrictMode>
);
