import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Board from '../components/Todo/Board';
import { TodoProvider } from '../contexts/Todo';

export default function Session() {
  const [todoItem, setTodoItem] = React.useState('');

  const listTodo = {
    list: [
      'Learn React',
      'Learn Redux',
      'Learn React Native',
      'Learn GraphQL',
      'Learn Apollo',
      'Learn Apollo Client',
      'Learn Apollo Server',
      'Learn Apollo Link',
      'Learn Apollo Cache',
    ],
    getList: function () {
      const storageList = localStorage.getItem('todo-list');
      if (storageList) return JSON.parse(storageList);
      else return this.list;
    },

    saveList: function (list: string[]) {
      localStorage.setItem('todo-list', JSON.stringify(list));
    },

    addItem: function (item: string) {
      this.saveList([...this.list, item]);
    },
  };

  return (
    <SessionStyled>
      <TodoProvider>
        <Board />
      </TodoProvider>
    </SessionStyled>
  );
}

const SessionStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 80px 0 0 0;
`;
