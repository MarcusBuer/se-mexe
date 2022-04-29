import Buttons from './Buttons'
import Clock from './Clock'
import Periods from './Periods'
import React from 'react'
import styled from 'styled-components'

export default function Timer() {
  return (
    <TimerStyled>
      <Clock />
      <Buttons />
      <Periods />
    </TimerStyled>
  )
}

const TimerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
