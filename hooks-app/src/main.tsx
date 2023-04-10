import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HooksApp />
  </React.StrictMode>,
)
