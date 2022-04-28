import React from 'react';
import produce, { Immutable } from 'immer';

import usePersistedState from '../hooks/usePersistedState';

type iList = Immutable<{
  title: string;
  creatable: boolean;
  done: boolean;
  cards: [
    {
      id: number;
      content: string;
    },
  ];
}>[];

export const TodoContext = React.createContext({
  move: (
    source: Number,
    sourceList: Number,
    target: Number,
    targetList: Number,
  ) => {},
  removeItem: (list: Number, id: Number) => {},
  addItem: (task: String, list: Number) => {},
  lists: [],
});

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const baseList = [
  {
    title: 'Tarefas',
    creatable: true,
    done: false,
    cards: [],
  },
  {
    title: 'Fazendo',
    creatable: false,
    done: false,
    cards: [],
  },
  {
    title: 'Concluído',
    creatable: false,
    done: true,
    cards: [],
  },
];

export function TodoProvider({ children }: Props) {
  const [lists, setLists] = usePersistedState<iList>('lista', baseList);

  const move = (source, sourceList, target, targetList) => {
    setLists(
      produce(lists, draft => {
        const dragged = draft[sourceList].cards[source];
        draft[sourceList].cards.splice(source, 1);
        draft[targetList].cards.splice(target, 0, dragged);
      }),
    );
  };

  const addItem = item => {
    if (item.length === 0) throw new Error('Item cannot be empty');
    const timeStamp = Date.now();
    setLists(
      produce(lists, draft => {
        const newItem = { id: timeStamp, content: item };
        draft[0].cards.push(newItem);
      }),
    );
  };

  const removeItem = (list, id) => {
    setLists(
      produce(lists, draft => {
        draft[list].cards.splice(id, 1);
      }),
    );
  };

  return (
    <TodoContext.Provider value={{ lists, move, addItem, removeItem }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = React.useContext(TodoContext);

  if (context === undefined) {
    throw new Error('Context was used outside of its Provider');
  }

  return context;
}
