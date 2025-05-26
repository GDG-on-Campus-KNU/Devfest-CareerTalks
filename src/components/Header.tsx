import { css } from '@emotion/react';
import styled from '@emotion/styled';
import logo from '../assets/GDG-Sticker-Brackets.mp4';

const Header = () => {
  return (
    <header
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
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            css={css`
              height: 100%; /* 헤더 높이(54px)에 맞춰 100% */
              width: auto; /* 비율 유지하며 가로 크기 자동 계산 */
              object-fit: cover; /* cover: 꽉 채우기, contain: 전체가 보이도록 */
            `}
          >
            <source src={logo} type="video/mp4" />
          </video>
        </>

        <div>
          <ul
            css={css`
              list-style-type: none;
              list-style: none;
              gap: 33px;
              display: flex;
            `}
          >
            <ListItem>소개</ListItem>
            <ListItem>시간표</ListItem>
            <ListItem>GDGoC KNU 보러가기</ListItem>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

const ListItem = styled.li`
  font-size: 13px;
`;
