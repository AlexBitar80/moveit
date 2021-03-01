import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { Overlay, Container } from '../styles/components/LevelUpModal';

export function LevelUpModal() {
  const { level, closeLeveUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo nível.</p>

        <button type="button" onClick={closeLeveUpModal}>
          <img src="/icons/close.svg" alt="fechar modal" />
        </button>
      </Container>
    </Overlay>
  );
}
