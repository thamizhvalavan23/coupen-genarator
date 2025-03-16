import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import AddmincontextProvider from './Context/Admincontext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AddmincontextProvider>
    <App />
  </AddmincontextProvider>
  </BrowserRouter>,
)
