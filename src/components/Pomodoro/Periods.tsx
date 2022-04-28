import React from 'react'
import styled, { css } from 'styled-components'

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
          <p>{interval.time} minutos</p>
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

  ${props=>props.isPlaying && css`
      cursor: not-allowed;
  `}
`
