import { useContext } from 'react';
import { CountdownContext } from '../context/CountdownContext';
import {
  CountdownContainer,
  CountdownButton,
  CountdownCancelButton,
} from '../styles/components/Countdown';

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
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinished ? (
        <CountdownButton disabled>
          Ciclo encerrado
          <img src="icons/check_circle.svg" alt="check" />
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownCancelButton type="button" onClick={resetCountdonw}>
              Abandonar ciclo
              <img src="icons/close.svg" alt="play" />
            </CountdownCancelButton>
          ) : (
            <CountdownButton type="button" onClick={startCountdonw}>
              Iniciar um ciclo
              <img src="icons/play_arrow.svg" alt="play" />
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
