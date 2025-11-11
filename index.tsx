
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Add a guard to prevent re-initialization, which causes React error #525.
// This can happen in some development environments or if scripts are loaded incorrectly.
if (!rootElement.hasAttribute('data-react-mounted')) {
  rootElement.setAttribute('data-react-mounted', 'true');
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}