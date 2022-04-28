import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useSettings } from '../contexts/Settings'

export default function Navbar() {
  const { theme } = useSettings()

  return (
    <NavbarStyled>
      <Link to='/'>
        <h1 className='Logo'>Se mexe!</h1>
      </Link>
      <div>
        {/* <LinkStyled to='/'>Inicial</LinkStyled> */}
        {/* <LinkStyled to='/session'>Inicie uma sessão</LinkStyled> */}
        <ButtonStyled onClick={theme.toggleTheme}>
          {theme.current.title === 'Light' ? 'Modo Escuro' : 'Modo Claro'}
        </ButtonStyled>
      </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  .Logo {
    font-size: 1.5rem;
    :hover {
      color: ${props => props.theme.colors.navbartext};
    }
  }
`

const LinkStyled = styled(Link)`
user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 0.5rem;
  color: ${props => props.theme.colors.navbartext};
  :hover {
    color: ${props => props.theme.colors.navbarhover};
  }
`

const ButtonStyled = styled.button`
user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  color: ${props => props.theme.colors.text};
  :hover {
    color: ${props => props.theme.colors.navbarhover};
  }
`
