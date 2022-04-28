import React from 'react'
import styled from 'styled-components'

import { usePomodoro } from '../../contexts/Pomodoro'

export default function Buttons() {
  const { 
    startHandler, pauseHandler, stopHandler, 
    isStartTimer, isStopTimer 
  } = usePomodoro()
  return (
    <ButtonsStyled>
      {isStartTimer ? (
        <button onClick={pauseHandler}>Pausar</button>):(
        <button onClick={startHandler}>Iniciar</button>)
      }
      <button disabled={isStopTimer} onClick={stopHandler}>Parar</button>
      <button>Configurar</button>
    </ButtonsStyled>
  )
}

const ButtonsStyled = styled.div`
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

    :hover:enabled {
      background-color: ${props => props.theme.colors.clockText};
      color: ${props => props.theme.colors.clockBackground};
    }

    :disabled {
      background: ${props => props.theme.colors.todoInputBackground};
      cursor: not-allowed;
    }
  }
`
