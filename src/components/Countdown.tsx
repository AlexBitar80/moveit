import { useContext } from 'react';
import { CountdownContext } from '../context/CountdownContext';
import style from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    hasFinished,
    minutes,
    seconds,
    isActive,
    resetCountdonw,
    startCountdonw,
  } = useContext(CountdownContext);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
