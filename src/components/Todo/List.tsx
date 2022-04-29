import Card from './Card'
import { MdAdd } from 'react-icons/md'
import React from 'react'
import styled from 'styled-components'
import { useTodo } from '../../contexts/Todo'

export default function List({ data, index: list }) {
  const addItemRef = React.useRef(null)
  const [task, setTask] = React.useState('')
  const { addItem } = useTodo()

  const handleSubmit = e => {
    e.preventDefault()
    try {
      addItem(task, list)
      setTask('')
      addItemRef.current.focus()
    } catch (error) {
      addItemRef.current.focus()
    }
  }

  return (
    <ListStyled done={data.done}>
      <header className='headerbar'>
        <div className='title'>
          <h2>{data.title}</h2>
          <p>{data.cards.length}</p>
        </div>
      </header>

      <ul>
        {data.creatable && (
          <CreateTask onSubmit={handleSubmit}>
            <header className='cardHeader'>
              <input
                className='input'
                ref={addItemRef}
                type='text'
                placeholder='Adicione uma tarefa'
                value={task}
                onChange={e => setTask(e.target.value)}
              />
            </header>
            <button type='submit'>
              <MdAdd size={22} />
            </button>
          </CreateTask>
        )}
        {data.cards.map((card, index) => {
          if (card?.hasOwnProperty('id'))
            return (
              <Card
                canDrag
                key={card.id}
                index={index}
                list={list}
                data={card}
              />
            )
        })}

        {data.cards.length > 0 || data.creatable ? null : (
          <div className='empty'>Lista vazia<br/>adicione um item aqui</div>
        )}
        <Card
          key={0}
          index={0}
          canDrag={false}
          list={list}
          data={{ id: 0 }}
        />
      </ul>
    </ListStyled>
  )
}

interface CreateTaskProps {
  done?: boolean
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

const CreateTask = styled.form<CreateTaskProps>`
  z-index: 1;
  display: flex;
  flex: 1 1 0;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background: ${props => props.theme.colors.todoInputBackground};
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 2px solid rgba(230, 236, 245, 0.55);

  .cardHeader {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .input {
    border: 0;
    outline: 0;
    background: ${props => props.theme.colors.todoInputBackground};
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Poppins', sans-serif;
    font-size: 80%;
    font-weight: 500;
    line-height: 20px;
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal;
    transition: border-bottom 0.2s;
    color: ${props => props.theme.colors.text};

    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${props => props.theme.colors.text};
    }
    :-ms-input-placeholder {
      color: ${props => props.theme.colors.text};
    }

    :focus {
      border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    }
  }

  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin: 0 0 0 clamp(0px, .5vw, 10px);
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
`

const ListStyled = styled.div<CreateTaskProps>`
user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  min-width: 150px;

  .title {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
    p {
      opacity: 80%;
      font-size: 75%;
      font-weight: 400;
      letter-spacing: 2px;
      &:before {
        content: '(';
      }
      &:after {
        content: ')';
      }
    }
  }

  .empty {
    z-index: 0;
    position: absolute;
    top: 8px;
    left: 0%;
    right: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 20px;
    font-weight: 300;
  }

  .headerbar {
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 16px;
      font-weight: 500;
      padding-right: 10px;
    }
  }

  ul {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    margin-top: 10px;
  }

  .card {
    opacity: ${props => (props.done ? 0.5 : 1)};
  }
`
