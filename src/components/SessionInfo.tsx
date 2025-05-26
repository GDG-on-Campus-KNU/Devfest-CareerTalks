import styled from '@emotion/styled';
import { scheduleData } from './SessionData';

// ─── 1) 컨테이너 ───────────────────────────
const Container = styled.div`
  width: calc(100% - 88px);
  margin: 120px auto;
  padding: 0 44px;
  @media (max-width: 800px) {
    margin: 60px auto;
  }
`;

// ─── 2) 2열(데스크탑)/1열(모바일) 그리드 ───
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 2px solid #000;
  background: #fff;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

// ─── 3) 각 기둥(Pillar) ────────────────────
const Pillar = styled.div`
  /* 첫 번째 기둥 오른쪽 경계선 */
  &:first-of-type {
    border-right: 1px solid #000;
  }

  /* 모바일에선 기둥 간 가로 경계 대신 세로 경계 */
  @media (max-width: 800px) {
    &:first-of-type {
      border-right: none;
      border-bottom: 1px solid #000;
    }
  }
`;

// ─── 4) 기둥 헤더 ───────────────────────────
const PillarHeader = styled.div`
  background: #000;
  color: #fff;
  padding: 8px 16px;
  font-weight: bold;
  font-size: 14px;
`;

// ─── 5) 세션 카드 ───────────────────────────
const SessionCard = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #000;
  padding: 16px;
  height: 250px;

  &:first-of-type {
    border-top: none;
  }

  @media (max-width: 800px) {
    height: 270px;
  }
`;

// ─── 6) 세션 내부 ───────────────────────────
const TimeLabel = styled.div`
  font-size: 12px;
  color: #555;
  margin-bottom: 8px;
`;
const SessionTitle = styled.h3`
  font-size: 16px;
  margin: 4px 0;
  font-weight: 600;
`;
const SessionDesc = styled.p`
  font-size: 14px;
  margin: 8px 0;
  line-height: 1.4;
  flex: 1;
`;
const SpeakerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SpeakerInfo = styled.div`
  font-size: 12px;
  color: #222;
`;
const ApplyButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 4px 12px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export default function SessionInfo() {
  const part1 = scheduleData.map((row) => row[0]);
  const part2 = scheduleData.map((row) => row[1]);

  return (
    <Container>
      {/*데스크탑: 2열 그리드*/}
      <Grid>
        <Pillar>
          <PillarHeader>1부 세션</PillarHeader>
          {part1.map((s, i) => (
            <SessionCard key={i}>
              <TimeLabel>{s.time}</TimeLabel>
              <SessionTitle>{s.title}</SessionTitle>
              <SessionDesc>{s.desc}</SessionDesc>
              <SpeakerRow>
                <SpeakerInfo>{s.speaker}</SpeakerInfo>
                {s.hasBtn && <ApplyButton>영상</ApplyButton>}
              </SpeakerRow>
            </SessionCard>
          ))}
        </Pillar>

        <Pillar>
          <PillarHeader>2부 세션</PillarHeader>
          {part2.map((s, i) => (
            <SessionCard key={i}>
              <TimeLabel>{s.time}</TimeLabel>
              <SessionTitle>{s.title}</SessionTitle>
              <SessionDesc>{s.desc}</SessionDesc>
              <SpeakerRow>
                <SpeakerInfo>{s.speaker}</SpeakerInfo>
                {s.hasBtn && <ApplyButton>영상</ApplyButton>}
              </SpeakerRow>
            </SessionCard>
          ))}
        </Pillar>
      </Grid>
    </Container>
  );
}
