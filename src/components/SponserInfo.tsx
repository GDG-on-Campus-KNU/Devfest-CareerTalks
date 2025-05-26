import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Junk from '../assets/burger.png';
import Domado from '../assets/domado.png';
import GDGoC from '../assets/gdgoc_logo.png';
import HighTech from '../assets/highTech.png';
import KRwork from '../assets/krwork.png';
import KNUdata from '../assets/knu_data.png';
import StockHolm from '../assets/stockholm.png';
import ZZok from '../assets/theZZok.png';
import JPub from '../assets/jpub.png';

export default function SponserInfo() {
  return (
    <div
      css={css`
        width: calc(100% - 88px);
        padding: 0 44px;
        margin: 120px 0;
      `}
    >
      <h1>후원사</h1>
      <p>
        GDGoC KNU는 이번 행사를 열기 위해 후원을 받았습니다. 후원 비용은 더 좋은
        행사를 열기 위해 사용되었으며, 앞으로도 더 많은 행사를 여는데에 있어서
        도움이 됩니다.
      </p>
      <div
        css={css`
          gap: 20px;
          margin: 30px 0%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <FirstImg src={GDGoC} alt="" />
        <div>
          <SecondImg src={KNUdata} alt="" />
          <SecondImg src={KRwork} alt="" />
          <SecondImg src={HighTech} alt="" />
        </div>

        <div>
          <ThirdImg src={JPub} alt="" />
          <ThirdImg src={Domado} alt="" />
          <ThirdImg src={Junk} alt="" />
          <ThirdImg src={StockHolm} alt="" />
          <ThirdImg src={ZZok} alt="" />
        </div>
      </div>
    </div>
  );
}

const FirstImg = styled.img`
  width: 50%;
  height: auto;
`;

const SecondImg = styled.img`
  width: 30%;
  height: auto;
`;

const ThirdImg = styled.img`
  width: 120px;
  height: auto;

  @media (max-width: 800px) {
    width: 80px;
  }
`;
