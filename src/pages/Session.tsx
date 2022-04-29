import Board from '../components/Todo/Board'
import Exercises from '../components/Exercise/Panel'
import { PomodoroProvider } from '../contexts/Pomodoro'
import React from 'react'
import Timer from '../components/Pomodoro/Timer'
import { TodoProvider } from '../contexts/Todo'
import styled from 'styled-components'

export default function Session() {
  return (
    <PomodoroProvider>
      <TodoProvider>
        <SessionStyled>
          <div className='sidebar'>
            <Timer />
            <Exercises/>
          </div>
          <Board />
        </SessionStyled>
      </TodoProvider>
    </PomodoroProvider>
  )
}

const SessionStyled = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  /* background-color: ${props => props.theme.colors.background}; */
  color: ${props => props.theme.colors.text};
  padding: 80px 0 0 0;
  font-size: clamp(70%, 3vw, 100%);

  .sidebar {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
    max-width: 300px;
    margin-right: 40px;
  }

  @media  (orientation: portrait) {
    flex-direction: column;
    .sidebar {
      flex:0;
      flex-direction: row;
      max-width: 100%;
      gap: 20px;
      margin-bottom: 20px;
    }
  }
`
