import React from 'react'
import styled from 'styled-components'
import Clock from './Clock'
import Periods from './Periods'
import Buttons from './Buttons'

export default function Timer() {
  return (
    <TimerStyled>
      <Clock />
      <Periods />
      <Buttons />
    </TimerStyled>
  )
}

const TimerStyled = styled.div`
  display: flex;
  max-width: 50%;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  margin-right: 20px;
`
