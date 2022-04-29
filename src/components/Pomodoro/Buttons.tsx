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
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;

  & :first-child {border-radius: 8px 0 0 8px;}
  & :last-child  {border-radius: 0 8px 8px 0;}

  button {
    width: 100%;
    border: none;

    background-color: ${props => props.theme.colors.clockBackground};
    color: ${props => props.theme.colors.clockText};
    font-size: 80%;
    font-weight: 500;

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
