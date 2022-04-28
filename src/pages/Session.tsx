import React from 'react'
import styled from 'styled-components'

import Exercises from '../components/Exercise/Panel'
import Timer from '../components/Pomodoro/Timer'
import Board from '../components/Todo/Board'
import { PomodoroProvider } from '../contexts/Pomodoro'
import { TodoProvider } from '../contexts/Todo'

export default function Session() {
  return (
    <SessionStyled>
      <div className='row'>
        <PomodoroProvider>
          <Timer />
        </PomodoroProvider>
        <Exercises/>
      </div>
      <TodoProvider>
        <Board />
      </TodoProvider>
    </SessionStyled>
  )
}

const SessionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 80px 0 0 0;

  .row {
    display: flex;
    flex: 1;
    width: 100%;
  }
`
