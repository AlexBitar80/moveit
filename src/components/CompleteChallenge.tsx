import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import style from '../styles/components/CompleteChallenge.module.css';

export default function CompleteChallenge() {
  const { challengeCompleted } = useContext(ChallengesContext);

  return (
    <div className={style.completeChallengeContainer}>
      <span>Desafios completos</span>
      <span>{challengeCompleted}</span>
    </div>
  );
}
