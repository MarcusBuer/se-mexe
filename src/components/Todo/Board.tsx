import React from 'react';
import styled from 'styled-components';

import List from './List';

import { useTodo } from '../../contexts/Todo';

export default function Board() {
  const { lists } = useTodo();
  return (
    <BoardStyled>
      {lists.map((list, index) => (
        <List key={list.title} data={list} index={index} />
      ))}
    </BoardStyled>
  );
}

const BoardStyled = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  gap: 20px;
`;
