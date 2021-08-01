import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';

declare global {
  interface Window {
    renderDashboard: (containerId: string) => void;
    unmountDashboard: (containerId: string) => void;
  }
}

window.renderDashboard = (containerId) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(containerId)
  );
};

window.unmountDashboard = (containerId) => {
  const el = document.getElementById(containerId);
  if (!el) {
    return;
  }

  ReactDOM.unmountComponentAtNode(el);
};
