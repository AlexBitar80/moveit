import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { Container } from '../styles/components/CompleteChallenge';

export default function CompleteChallenge() {
  const { challengeCompleted } = useContext(ChallengesContext);

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengeCompleted}</span>
    </Container>
  );
}
