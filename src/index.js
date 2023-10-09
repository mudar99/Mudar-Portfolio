import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Analytics } from '@vercel/analytics/react';

const analytics = Analytics('your-vercel-project-id');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Analytics.Provider value={analytics}>
      <App />
    </Analytics.Provider>
  </React.StrictMode>
);
