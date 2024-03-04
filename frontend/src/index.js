import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TestsContextProvider } from './context/TestContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestsContextProvider>
      <App />
    </TestsContextProvider>
  </React.StrictMode>
);