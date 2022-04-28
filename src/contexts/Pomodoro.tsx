import produce, { Immutable } from 'immer'
import React from 'react'

import usePersistedState from '../hooks/usePersistedState'

export const PomodoroContext = React.createContext({
  renderedStreamDuration: '',
  intervals: [{ title: '', time: 0 }],
  current: 0,
  handleChangeInterval: index => {},
  startHandler: () => {},
  pauseHandler: () => {},
  stopHandler: () => {},
  isStartTimer: false,
  isStopTimer: false,
})

type Props = {
  children?: JSX.Element | JSX.Element[]
}

export function PomodoroProvider({ children }: Props) {
  const [intervals, setIntervals] = React.useState([
    { title: 'Trabalho', time: 45 },
    { title: 'Intervalo', time: 15 },
    { title: 'Trabalho', time: 45 },
    { title: 'Intervalo', time: 15 },
    { title: 'Trabalho', time: 45 },
    { title: 'Descanso', time: 30 },
  ])
  const [current, setCurrent] = React.useState(0)
  const [renderedStreamDuration, setRenderedStreamDuration] =
    React.useState('00:00:00')
  const streamDuration = React.useRef(0)
  const previousTime = React.useRef(0)
  const requestAnimationFrameId = React.useRef(null)
  const [isStartTimer, setIsStartTimer] = React.useState(false)
  const [isStopTimer, setIsStopTimer] = React.useState(true)

  const updateTimer = React.useCallback(() => {
    let now = performance.now()
    let dt = now - previousTime.current

    if (dt >= 1000) {
      streamDuration.current = streamDuration.current + Math.round(dt / 1000)
      const formattedStreamDuration = new Date(streamDuration.current * 1000)
        .toISOString()
        .substr(11, 8)
      setRenderedStreamDuration(formattedStreamDuration)
      previousTime.current = now
    }
    requestAnimationFrameId.current = requestAnimationFrame(updateTimer)
  }, [])

  const startTimer = React.useCallback(() => {
    previousTime.current = performance.now()
    requestAnimationFrameId.current = requestAnimationFrame(updateTimer)
  }, [updateTimer])

  React.useEffect(() => {
    if (isStartTimer && !isStopTimer) {
      startTimer()
    }
    if (isStopTimer && !isStartTimer) {
      streamDuration.current = 0
      cancelAnimationFrame(requestAnimationFrameId.current)
      setRenderedStreamDuration('00:00:00')
    }
  }, [isStartTimer, isStopTimer, startTimer])

  const startHandler = () => {
    setIsStartTimer(true)
    setIsStopTimer(false)
  }

  const stopHandler = () => {
    setIsStopTimer(true)
    setIsStartTimer(false)
  }

  const pauseHandler = () => {
    setIsStopTimer(false)
    setIsStartTimer(false)
    cancelAnimationFrame(requestAnimationFrameId.current)
  }

  const changeIntervalHandler = () => {
    current === intervals.length - 1 ? setCurrent(0) : setCurrent(current + 1)
    stopHandler()
    setTimeout(() => startHandler(), 1000)
  }

  React.useEffect(() => {
    if (
      Number(renderedStreamDuration[3] + renderedStreamDuration[4]) >=
      Number(intervals[current].time)
    ) {
      changeIntervalHandler()
    }
  }, [renderedStreamDuration])

  const handleChangeInterval = index => {
    if (!isStartTimer) setCurrent(index)
  }

  return (
    <PomodoroContext.Provider
      value={{
        renderedStreamDuration,
        intervals,
        handleChangeInterval,
        current,
        startHandler,
        pauseHandler,
        stopHandler,
        isStartTimer,
        isStopTimer,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  )
}

export function usePomodoro() {
  const context = React.useContext(PomodoroContext)

  if (context === undefined) {
    throw new Error('Context was used outside of its Provider')
  }

  return context
}
