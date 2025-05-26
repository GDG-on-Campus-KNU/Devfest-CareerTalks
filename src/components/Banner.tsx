import { useRef, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import ReactCanvasConfetti from 'react-canvas-confetti';
import type { Options as ConfettiOptions } from 'canvas-confetti';
import Devfest from '../assets/devfest_careerTalks.png';

const Container = styled.div`
  position: relative;
  width: calc(100% - 88px);
  height: calc(100vh - 54px);
  padding: 0 44px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  @media (max-width: 800px) {
    padding: 0 16px;
    height: calc(80vh - 54px);
  }
`;

const ResponsiveImg = styled.img`
  display: block;
  width: 80%;
  height: auto;
  z-index: 0;
`;

const COLOR_PALETTES = [
  ['#FBBC05', '#EA4335', '#4285F4', '#34A853', '#F3F4F4', '#8A8D92'],
];

function getRandomPalette() {
  return COLOR_PALETTES[Math.floor(Math.random() * COLOR_PALETTES.length)];
}

export default function Banner() {
  const confettiRef = useRef<((opts: ConfettiOptions) => void) | null>(null);

  const handleInit = useCallback(
    ({ confetti }: { confetti: (opts: ConfettiOptions) => void }) => {
      confettiRef.current = confetti;
    },
    []
  );

  const makeShot = useCallback(
    (particleRatio: number, opts: ConfettiOptions) => {
      if (!confettiRef.current) return;
      confettiRef.current({
        ...opts,
        particleCount: Math.floor(particleRatio * 1000),
      });
    },
    []
  );

  const fireRich = useCallback(() => {
    // 좌측 상단에서 강력하게
    makeShot(0.25, {
      spread: 120,
      startVelocity: 60,
      origin: { x: 0.1, y: 0.5 },
      colors: getRandomPalette(),
      ticks: 300,
    });
    // 우측 상단에서 가볍게
    makeShot(0.2, {
      spread: 90,
      startVelocity: 40,
      origin: { x: 0.9, y: 0.6 },
      colors: getRandomPalette(),
      ticks: 300,
    });
    // 중앙에서 폭발처럼
    makeShot(0.35, {
      spread: 200,
      decay: 0.92,
      scalar: 1.2,
      origin: { x: 0.5, y: 0.4 },
      colors: getRandomPalette(),
      ticks: 300,
    });
    // 랜덤 위치에서 잔잔하게 흩날림
    makeShot(0.1, {
      spread: 260,
      startVelocity: 20,
      decay: 0.94,
      scalar: 0.6,
      origin: { x: Math.random(), y: 0.0 },
      colors: getRandomPalette(),
      ticks: 300,
    });
  }, [makeShot]);

  useEffect(() => {
    fireRich();
    const interval = setInterval(fireRich, 4500);
    return () => clearInterval(interval);
  }, [fireRich]);

  return (
    <Container>
      <ReactCanvasConfetti
        onInit={handleInit}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
      <ResponsiveImg src={Devfest} alt="DevFest Career Talks 배너" />
    </Container>
  );
}
