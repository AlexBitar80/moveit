import { useEffect, useState } from 'react';
import style from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

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
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
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

      {hasFinished ? (
        <button disabled className={style.countdownButton}>
          Ciclo encerrado
          <img src="icons/check_circle.svg" alt="check" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              onClick={resetCountdonw}
              className={`${style.countdownButtonActive} ${style.countdownButton}`}
            >
              Abandonar ciclo
              <img src="icons/close.svg" alt="play" />
            </button>
          ) : (
            <button
              type="button"
              onClick={startCountdonw}
              className={style.countdownButton}
            >
              Iniciar um ciclo
              <img src="icons/play_arrow.svg" alt="play" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
