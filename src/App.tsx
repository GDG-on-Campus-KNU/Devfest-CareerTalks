import { css } from '@emotion/react';
import Header from './components/Header';
import SessionInfo from './components/SessionInfo';
import SponserInfo from './components/SponserInfo';

function App() {
  return (
    <>
      <Header />
      <main
        css={css`
          display: block;
          padding-top: 54px;
        `}
      >
        <div
          css={css`
            z-index: 10;
            max-width: 1200px;
            margin: auto;
            padding: 0 22px;
            pointer-events: auto;
          `}
        >
          <SessionInfo />
          <SponserInfo />
        </div>
      </main>
    </>
  );
}

export default App;
