import styled from '@emotion/styled';

const Container = styled.div`
  width: calc(100% - 88px);
  margin: 120px auto;
  padding: 0 44px;
  @media (max-width: 800px) {
    margin: 60px auto;
  }
`;

export default function Info() {
  return <Container></Container>;
}
