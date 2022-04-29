import styled, { css } from 'styled-components'

import React from 'react'
import { usePomodoro } from '../../contexts/Pomodoro'

export default function Periods() {
  const { intervals, handleChangeInterval, current, isStartTimer } = usePomodoro()
  return (
    <PeriodsStyled isPlaying={isStartTimer}>
      {intervals.map((interval, index) => (
        <div
          title={isStartTimer?"Pause ou Pare para mudar":""}
          key={interval.title + index}
          onClick={() => !isStartTimer?handleChangeInterval(index):null}
          className={`${current === index ? 'active' : null}`}
        >
          {interval.title}
          <p>{interval.time} min</p>
        </div>
      ))}
    </PeriodsStyled>
  )
}

interface PeriodsProps {
  isPlaying: boolean
}

const PeriodsStyled = styled.div<PeriodsProps>`
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 100%;
  border: 2px solid ${props => props.theme.colors.clockText};

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    overflow: hidden;
    align-items: center;
    justify-content: center;

    padding: 10px 0;
    font-size: 70%;
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color 0.5s ease-in-out;

    background-color: ${props => props.theme.colors.clockBackground};
    color: ${props => props.theme.colors.clockText};
    border: -2px solid ${props => props.theme.colors.clockBackground};
    border: 1px solid ${props => props.theme.colors.clockText};

    p {
      margin-top: 5px;
      font-size: 100%;
      font-weight: 500;

      :before {
        content: '( ';
        font-size: 10px;
      }
      :after {
        content: ' )';
        font-size: 10px;
      }
    }
  }
  .active {
    background-color: ${props => props.theme.colors.clockText};
    color: ${props => props.theme.colors.clockBackground};
    border: 2px solid ${props => props.theme.colors.clockText};
  }

  ${props=>props.isPlaying && css`
      cursor: not-allowed;
  `}
`
