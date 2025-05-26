import { css } from '@emotion/react';
import styled from '@emotion/styled';

import logo from '../assets/GDG-Sticker-Brackets.mp4';

const Header = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 54;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
  return (
    <header
      role="banner"
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 54px;
        background: #fff;
        z-index: 100;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1156px;
          height: 100%;
          margin: 0 auto;
          padding: 8px 22px;
          box-sizing: border-box;
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
              display: flex;
              gap: 33px;
              margin: 0;
              padding: 0;
              list-style: none;
            `}
          >
            {[
              { label: '소개', id: 'about' },
              { label: '시간표', id: 'schedule' },
              { label: '후원사', id: 'sponser' },
            ].map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}

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
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
