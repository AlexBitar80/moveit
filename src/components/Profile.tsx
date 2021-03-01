import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { Container } from '../styles/components/Profile';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <img src="https://github.com/AlexBitar80.png" alt="João Alexandre" />
      <div>
        <strong>João Alexandre</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
}
