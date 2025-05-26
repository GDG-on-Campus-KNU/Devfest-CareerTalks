import { css } from '@emotion/react';
import Header from './components/Header';
import Banner from './components/Banner';
import SessionInfo from './components/SessionInfo';
import SponserInfo from './components/SponserInfo';
import Info from './components/Info';

function App() {
  return (
    <>
      <Header />
      <main
        css={css`
          display: block;
          padding-top: 54px; /* Header 높이 만큼 띄우기 */
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: auto;
            padding: 0 22px;
            z-index: 10;
          `}
        >
          <Banner />
          <section id="about">
            <Info />
          </section>

          <section id="schedule">
            <SessionInfo />
          </section>

          <section id="sponser">
            <SponserInfo />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
