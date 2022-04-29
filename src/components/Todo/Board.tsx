import List from './List'
import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import styled from 'styled-components'
import { useTodo } from '../../contexts/Todo'

export default function Board() {
  const { lists } = useTodo()
  return (
    <BoardStyled 
      ignoreElements='.card' 
      nativeMobileScroll={false} 
      vertical={true}
      horizontal={true}
      hideScrollbars={false}
    >
      {lists.map((list, index) => (
        <List key={list.title} data={list} index={index} />
      ))}
    </BoardStyled>
  )
}

const BoardStyled = styled(ScrollContainer)`
  display: flex;

  flex-direction: row;
  flex: 1;
  width: 100%;
  height: 100%;
  gap: 20px;
  overflow: auto;
  padding:5px;
`
