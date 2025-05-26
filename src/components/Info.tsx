import styled from '@emotion/styled';

const Container = styled.div`
  width: calc(100% - 88px);
  margin: 0 auto;
  padding: 0 44px;

  @media (max-width: 800px) {
    width: calc(100% - 32px);
    padding: 0 16px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #222;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.25rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: #333;
  }
`;

export default function Info() {
  return (
    <Container>
      <h1>GDG on Campus with KNU</h1>
      <p>
        Google Developers와 함께하는 경북대학교 학생 커뮤니티 그룹입니다.
        대구·경북 지역의 기술 인프라에 공감하며, 학생 여러분이 개발에 몰입할 수
        있는 최적의 환경을 제공하기 위해 다음과 같은 가치를 실현합니다:
      </p>

      <h2>공유</h2>
      <p>지역 내 최신 기술 동향과 경험을 함께 나눕니다.</p>

      <h2>성장</h2>
      <p>스터디, 워크숍, 해커톤 등 다양한 활동으로 실력을 키웁니다.</p>

      <h2>연대</h2>
      <p>대구·경북 학우들과 네트워킹하며 협업의 장을 마련합니다.</p>

      <p>
        앞으로도 더 나은 개발 환경을 위해 꾸준히 노력하겠습니다. 함께 성장하는
        GDG on Campus with KNU에 많은 관심과 참여 부탁드립니다!
      </p>
    </Container>
  );
}
