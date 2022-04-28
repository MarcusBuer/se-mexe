import React from 'react';
import styled from 'styled-components';

export default function Timer() {
  const [intervals, setIntervals] = React.useState([
    { title: 'Trabalho', time: 45 },
    { title: 'Intervalo', time: 15 },
    { title: 'Trabalho', time: 45 },
    { title: 'Intervalo', time: 15 },
    { title: 'Trabalho', time: 45 },
    { title: 'Descanso', time: 30 },
  ]);
  const [current, setCurrent] = React.useState(0);
  const [renderedStreamDuration, setRenderedStreamDuration] =
    React.useState('00:00:00');
  const streamDuration = React.useRef(0);
  const previousTime = React.useRef(0);
  const requestAnimationFrameId = React.useRef(null);
  const [isStartTimer, setIsStartTimer] = React.useState(false);
  const [isStopTimer, setIsStopTimer] = React.useState(false);

  const updateTimer = React.useCallback(() => {
    let now = performance.now();
    let dt = now - previousTime.current;

    if (dt >= 1000) {
      streamDuration.current = streamDuration.current + Math.round(dt / 1000);
      const formattedStreamDuration = new Date(streamDuration.current * 1000)
        .toISOString()
        .substr(11, 8);
      setRenderedStreamDuration(formattedStreamDuration);
      previousTime.current = now;
    }
    requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
  }, []);

  const startTimer = React.useCallback(() => {
    previousTime.current = performance.now();
    requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
  }, [updateTimer]);

  React.useEffect(() => {
    if (isStartTimer && !isStopTimer) {
      startTimer();
    }
    if (isStopTimer && !isStartTimer) {
      streamDuration.current = 0;
      cancelAnimationFrame(requestAnimationFrameId.current);
      setRenderedStreamDuration('00:00:00');
    }
  }, [isStartTimer, isStopTimer, startTimer]);

  const startHandler = () => {
    setIsStartTimer(true);
    setIsStopTimer(false);
  };

  const stopHandler = () => {
    setIsStopTimer(true);
    setIsStartTimer(false);
  };

  const pauseHandler = () => {
    setIsStopTimer(false);
    setIsStartTimer(false);
    cancelAnimationFrame(requestAnimationFrameId.current);
  };

  const changeIntervalHandler = () => {
    current === intervals.length - 1 ? setCurrent(0) : setCurrent(current + 1);
    stopHandler();
    setTimeout(() => startHandler(), 1000);
  };

  React.useEffect(() => {
    if (
      Number(renderedStreamDuration[3] + renderedStreamDuration[4]) >=
      Number(intervals[current].time)
    ) {
      changeIntervalHandler();
    }
  }, [renderedStreamDuration]);

  const handleChangeInterval = index => {
    if (!isStartTimer) setCurrent(index);
  };

  return (
    <TimerStyled>
      <div className='header'></div>
      <div className='timer non-selectable'>
        <p>{renderedStreamDuration[3]}</p>
        <p>{renderedStreamDuration[4]}</p>
        <p
          className={`dot ${
            Number(renderedStreamDuration[7]) % 2 === 0 ? `dotBlink` : ``
          }`}
        >
          :
        </p>
        <p>{renderedStreamDuration[6]}</p>
        <p>{renderedStreamDuration[7]}</p>
      </div>
      <div className='intervalos non-selectable'>
        {intervals.map((interval, index) => (
          <div
            key={interval.title + index}
            onClick={() => handleChangeInterval(index)}
            className={`${current === index ? 'active' : null}`}
          >
            {interval.title}
            <p>{interval.time} minutos</p>
          </div>
        ))}
      </div>
      <div className='botoes'>
        <button onClick={startHandler}>Iniciar</button>
        <button onClick={pauseHandler}>Pausar</button>
        <button onClick={stopHandler}>Parar</button>
        <button>Configurar</button>
      </div>
    </TimerStyled>
  );
}

const TimerStyled = styled.div`
  display: flex;
  max-width: 50%;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  margin-right: 20px;

  .non-selectable {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .timer {
    display: flex;
    justify-content: space-around;
    max-width: 50%;
    margin: 10px auto;
    gap: 5px;

    .dot {
      flex: 0;
      background-color: ${props => props.theme.colors.clockText};
      color: ${props => props.theme.colors.clockBackground};
      background: ${props => props.theme.colors.background};
      border: none;
      text-shadow: 0 0 4px ${props => props.theme.colors.clockText};
    }

    .dotBlink {
      color: ${props => props.theme.colors.text};
    }

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex: 1 0 auto;
      height: 100px;
      width: 100px;
      background-color: ${props => props.theme.colors.clockBackground};
      color: ${props => props.theme.colors.clockText};
      font-size: 84px;
      border-radius: 4px;
      border: 2px solid ${props => props.theme.colors.clockText};
    }
  }

  .intervalos {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    max-width: 100%;

    div {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      height: 120px;
      width: 120px;
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase;
      transition: background-color 0.5s ease-in-out;

      background-color: ${props => props.theme.colors.clockBackground};
      color: ${props => props.theme.colors.clockText};
      border: -2px solid ${props => props.theme.colors.clockBackground};
      border-left: 2px solid ${props => props.theme.colors.clockText};

      p {
        margin-top: 5px;
        font-size: 13px;
        font-weight: 400;

        :before {
          content: '( ';
          font-size: 12px;
        }
        :after {
          content: ' )';
          font-size: 12px;
        }
      }
    }
    .active {
      background-color: ${props => props.theme.colors.clockText};
      color: ${props => props.theme.colors.clockBackground};
      border: 2px solid ${props => props.theme.colors.clockText};
    }
    & > :last-child {
      border-right: 2px solid ${props => props.theme.colors.clockText};
    }
  }

  .botoes {
    display: flex;
    justify-content: center;
    gap: 20px;

    button {
      width: 100px;
      height: 40px;
      border-radius: 4px;
      border: none;

      background-color: ${props => props.theme.colors.clockBackground};
      color: ${props => props.theme.colors.clockText};
      font-size: 14px;
      border: 2px solid ${props => props.theme.colors.clockBackground};

      :hover {
        background-color: ${props => props.theme.colors.clockText};
        color: ${props => props.theme.colors.clockBackground};
      }
    }
  }
`;
