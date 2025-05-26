import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Global, css } from '@emotion/react';
import normalize from 'emotion-normalize';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global
      styles={css`
        ${normalize}
        body {
          margin: 0;
          font-family: 'Noto Sans KR', 'Noto Sans', serif;
        }
      `}
    />
    <App />
  </StrictMode>
);
