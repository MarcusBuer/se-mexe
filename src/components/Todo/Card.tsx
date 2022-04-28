import React from 'react'
import styled, { css } from 'styled-components'
import { useDrag, useDrop } from 'react-dnd'
import { useTodo } from '../../contexts/Todo'
import { MdRemove } from 'react-icons/md'

interface iProps {
  index: number
  data: any
  list: number
  canDrag: boolean
}

export default function Card({ data, index, list, canDrag }: iProps) {
  const ref = React.useRef(null)
  const { move, removeItem } = useTodo()

  interface iTeste {
    list: number
    index: number
    canDrag: boolean
  }

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: () => {
      return {
        list,
        index,
        canDrag,
      }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: iTeste, monitor) {
      if (!item.canDrag) return
      const source = item.index
      const target = index

      const sourceList = item.list
      const targetList = list

      if (source === target && sourceList === targetList) return

      const targetPosition = ref.current.getBoundingClientRect()
      const targetVerticalCenter =
        (targetPosition.bottom - targetPosition.top) / 2

      const sourceOffset = monitor.getClientOffset()
      const sourceTop = sourceOffset.y - targetPosition.top

      if (
        source < target &&
        sourceTop < targetVerticalCenter &&
        sourceList === targetList
      )
        return

      if (
        source > target &&
        sourceTop > targetVerticalCenter &&
        sourceList === targetList
      )
        return

      move(source, sourceList, target, targetList)

      item.index = target
      item.list = targetList
    },
  })

  dragRef(dropRef(ref))

  return (
    <CardStyled
      canDrag={canDrag}
      ref={ref}
      isDragging={canDrag ? isDragging : false}
    >
      <header className='cardHeader'>
        <p>{data.content}</p>
      </header>
      <button type='button' onClick={() => removeItem(list, index)}>
        <MdRemove size={22} />
      </button>
    </CardStyled>
  )
}

interface CardStyledProps {
  canDrag: boolean
  isDragging: boolean
}

const CardStyled = styled.li<CardStyledProps>`
  display: flex;
  flex: 1 1 0;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: ${props => props.theme.colors.todoBackground};
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 2px solid rgba(230, 236, 245, 0.55);
  cursor: grab;

  .cardHeader {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  p {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal;
  }

  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin: 0 0 0 10px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
    border: 2px solid ${props => props.theme.colors.background};

    :hover {
      border: 2px solid ${props => props.theme.colors.text};
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
      transform: scale(1.1);
    }

    svg {
      position: absolute;
    }
  }

  ${props =>
    !props.canDrag &&
    css`
      flex-grow: 1000000;
      opacity: 0%;
      height: 100%;
      cursor: default;
      user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    `}

  ${props =>
    props.isDragging &&
    css`
      border: 2px dashed ${props.theme.colors.text};
      opacity: 50%;
      padding-top: 31px;
      border-radius: 0;
      background-color: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      header {
        opacity: 0;
      }
    `}
`
