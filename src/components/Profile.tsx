import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/AlexBitar80.png" alt="João Alexandre" />
      <div>
        <strong>João Alexandre</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 2
        </p>
      </div>
    </div>
  );
}
