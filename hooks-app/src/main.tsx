import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp';
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>,
)
