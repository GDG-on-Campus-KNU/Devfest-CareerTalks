import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Global, css } from '@emotion/react';
import normalize from 'emotion-normalize';
import { BrowserRouter } from 'react-router-dom';

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
