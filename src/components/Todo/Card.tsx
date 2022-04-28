import React from 'react';
import styled, { css } from 'styled-components';
import { useDrag, useDrop } from 'react-dnd';
import { useTodo } from '../../contexts/Todo';
import { MdRemove } from 'react-icons/md';

export default function Card({ data, index, list, canDrag }) {
  const ref = React.useRef();
  const { move, removeItem } = useTodo();

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: {
      index,
      list,
      canDrag,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      if (!item.canDrag) return;
      const source = item.index;
      const target = index;

      const sourceList = item.list;
      const targetList = list;

      if (source === target && sourceList === targetList) return;

      const targetPosition = ref.current.getBoundingClientRect();
      const targetVerticalCenter =
        (targetPosition.bottom - targetPosition.top) / 2;

      const sourceOffset = monitor.getClientOffset();
      const sourceTop = sourceOffset.y - targetPosition.top;

      if (
        source < target &&
        sourceTop < targetVerticalCenter &&
        sourceList === targetList
      )
        return;

      if (
        source > target &&
        sourceTop > targetVerticalCenter &&
        sourceList === targetList
      )
        return;

      move(source, sourceList, target, targetList);

      item.index = target;
      item.list = targetList;
    },
  });

  dragRef(dropRef(ref));

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
  );
}

const CardStyled = styled.li`
  display: flex;
  flex: 1 1 0;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: #fff2;
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
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};

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
`;
