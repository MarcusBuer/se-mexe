import React from 'react';
import styled from 'styled-components';

import Board from '../components/Todo/Board';
import { TodoProvider } from '../contexts/Todo';

import Timer from '../components/Pomodoro/Timer';

export default function Session() {
  return (
    <SessionStyled>
      <div className='row'>
        <Timer />
        <Exercicios>
          <h3>Próximos Exercícios</h3>

          <div className='lista-exercicios'>
            <div className='exercicio'>
              <img
                src='https://api.lorem.space/image/face?w=150&h=150&hash=500B67FB'
                alt='Exercício'
              />
              <div className='descricao'>
                <h4>Exercício 1</h4>
                <p>Descrição do exercício 1</p>
              </div>
            </div>
            <div className='exercicio'>
              <img
                src='https://api.lorem.space/image/face?w=150&h=150&hash=A89D0DE6'
                alt='Exercício'
              />
              <div className='descricao'>
                <h4>Exercício 2</h4>
                <p>Descrição do exercício 2</p>
              </div>
            </div>
            <div className='exercicio'>
              <img
                src='https://api.lorem.space/image/face?w=150&h=150&hash=225E6693'
                alt='Exercício'
              />
              <div className='descricao'>
                <h4>Exercício 3</h4>
                <p>Descrição do exercício 3</p>
              </div>
            </div>
          </div>
        </Exercicios>
      </div>
      <TodoProvider>
        <Board />
      </TodoProvider>
    </SessionStyled>
  );
}

const Exercicios = styled.div`
  display: flex;
  max-width: 50%;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  padding-left: 20px;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }

  .lista-exercicios {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: 10px;
  }

  .exercicio {
    display: flex;
    flex-direction: row;
    background: ${props => props.theme.colors.clockBackground};
    border-radius: 8px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 8px 0 0 8px;
    }
  }

  .descricao {
    padding: 12px;
    color: ${props => props.theme.colors.clockText};
    h4 {
      font-weight: 500;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
    }
  }
`;

const SessionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 80px 0 0 0;

  .row {
    display: flex;
    flex: 1;
    width: 100%;
  }
`;
