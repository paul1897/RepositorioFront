import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Paginas/Home'
import Inicio from './Paginas/Agg/AgregarEstudiante'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
       <Home />
   
  </React.StrictMode>
);


reportWebVitals();
