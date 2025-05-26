import styled from '@emotion/styled';

import Devfest from '../assets/devfest_careerTalks.png';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  width: calc(100% - 88px);
  height: 650px;
  margin: 120px auto;
  padding: 0 44px;

  @media (max-width: 800px) {
    margin: 60px auto;
    width: calc(100% - 32px);
    height: 400px;
    padding: 0 16px;
  }
`;

const ResponsiveImg = styled.img`
  display: block;
  width: 80%;
  height: auto;
  z-index: 90;
`;

export default function Banner() {
  return (
    <Container>
      {/* 배너 이미지 */}
      <ResponsiveImg src={Devfest} alt="DevFest Career Talks 배너" />
    </Container>
  );
}
