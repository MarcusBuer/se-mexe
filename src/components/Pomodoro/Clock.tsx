import React from 'react'
import styled from 'styled-components'

import { usePomodoro } from '../../contexts/Pomodoro'

export default function Clock() {
  const { renderedStreamDuration } = usePomodoro()
  const [_H,_h,_x,M,m,_z,S,s] = renderedStreamDuration
  return (
    <ClockStyled>
      <p>{M}</p><p>{m}</p>
      <p
        className={`dot ${
          Number(s) % 2 !== 0 ? `dotBlink` : ``
        }`}
      >:</p>
      <p>{S}</p><p>{s}</p>
    </ClockStyled>
  )
}

const ClockStyled = styled.div`
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

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
`
