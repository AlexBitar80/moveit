import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { CountdownContext } from '../context/CountdownContext';
import {
  ChallengeBoxContainer,
  ChallengeActive,
  ChallengeSucceededButton,
  ChallengeFailButton,
  ChallengeNotActive,
} from '../styles/components/ChallengeBox';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext,
  );
  const { resetCountdonw } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdonw();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdonw();
  }

  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeFailButton type="button" onClick={handleChallengeFailed}>
              Falhei
            </ChallengeFailButton>
            <ChallengeSucceededButton
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </ChallengeSucceededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Complete-os e ganhe experiência e avance de leve.
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  );
}
