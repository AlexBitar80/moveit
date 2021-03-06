import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { FiX } from 'react-icons/fi';
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
          <FiX size={25} />
        </button>
      </Container>
    </Overlay>
  );
}
