import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLeveUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo nível.</p>

        <button type="button" onClick={closeLeveUpModal}>
          <img src="/icons/close.svg" alt="fechar modal" />
        </button>
      </div>
    </div>
  );
}
