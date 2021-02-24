import { useEffect, useState } from 'react';
import style from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdonw() {
    setIsActive(true);
  }

  function resetCountdonw() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={style.CountdonwContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {isActive ? (
        <button
          type="button"
          onClick={resetCountdonw}
          className={`${style.countdownButtonActive} ${style.countdownButton}`}
        >
          Abandonar ciclo
        </button>
      ) : (
        <button
          type="button"
          onClick={startCountdonw}
          className={style.countdownButton}
        >
          Iniciar um ciclo
        </button>
      )}
    </div>
  );
}
