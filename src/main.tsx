import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Global } from '@emotion/react';
import normalize from 'emotion-normalize';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={normalize} />
    <App />
  </StrictMode>
);
