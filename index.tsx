import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Since this is a single file component, we are not creating a separate index.css file.
// All styling is done via Tailwind CSS in the components.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);