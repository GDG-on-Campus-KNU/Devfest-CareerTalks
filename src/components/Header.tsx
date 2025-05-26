import { css } from '@emotion/react';
import styled from '@emotion/styled';
import logo from '../assets/GDG-Sticker-Brackets.mp4';

const Header = () => {
  return (
    <header
      role="banner"
      css={css`
        position: fixed;
        top: 0px;
        left: 0px;
        margin: auto;
        z-index: 100;
        width: 100%;
        height: 54px;
        background-color: rgb(255, 255, 255);
      `}
    >
      <div
        css={css`
          box-sizing: border-box;
          display: flex;
          width: 100%;
          height: 100%;
          max-width: 1156px;
          -webkit-box-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          align-items: center;
          margin: auto;
          text-align: center;
          padding: 8px 22px;
        `}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          css={css`
            height: 100%;
            width: auto;
            object-fit: cover;
          `}
        >
          <source src={logo} type="video/mp4" />
        </video>

        <nav aria-label="주요 메뉴">
          <ul
            css={css`
              list-style-type: none;
              list-style: none;
              gap: 33px;
              display: flex;
            `}
          >
            <li>
              <Link href="#about">소개</Link>
            </li>
            <li>
              <Link href="#schedule">시간표</Link>
            </li>
            <li>
              <Link
                href="https://gdsc-knu.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GDGoC KNU 보러가기
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

const Link = styled.a`
  font-size: 13px;
  text-decoration: none;
  color: inherit;
  &:hover {
    opacity: 0.8;
  }
`;
