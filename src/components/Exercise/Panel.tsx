import React from 'react'
import styled from 'styled-components'

export default function Panel() {
  return (
    <PanelStyled>
          <h3>Próximos Exercícios:</h3>

          <div className='list'>
            <div className='exercise'>
              <div className='description'>
                <h4>Exercício 1</h4>
                <p>Descrição do exercício 1</p>
              </div>
            </div>
            <div className='exercise'>
              <div className='description'>
                <h4>Exercício 2</h4>
                <p>Descrição do exercício 2</p>
              </div>
            </div>
            <div className='exercise'>
              <div className='description'>
                <h4>Exercício 3</h4>
                <p>Descrição do exercício 3</p>
              </div>
            </div>
          </div>
        </PanelStyled>
  )
}

const PanelStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  h3 {
    font-size: 80%;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .exercise {
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.clockBackground};
    border-radius: 4px;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;      
    }
  }

  .description {
    padding: 12px;
    color: ${props => props.theme.colors.clockText};
    h4 {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
    }
  }

  @media (orientation: portrait) {
    .list {
      flex:1;
      max-height: 200px;
      overflow-y: scroll;
      background-color: ${props => props.theme.colors.clockBackground};
      border-radius: 4px;
      gap:0;
    }
    
    .exercise {
      background-color: ${props => props.theme.colors.clockBackground};
      border-top: 2px solid ${props=> props.theme.colors.background};
      border-radius: 0;
    }
  }
`