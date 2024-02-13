import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css';
import { HeroesApp } from './HeroesApp';
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);