import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';

declare global {
  interface Window {
    renderSettings: (containerId: string) => void;
    unmountSettings: (containerId: string) => void;
  }
}

window.renderSettings = (containerId) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(containerId)
  );
};

window.unmountSettings = (containerId) => {
  const el = document.getElementById(containerId);
  if (!el) {
    return;
  }

  ReactDOM.unmountComponentAtNode(el);
};
