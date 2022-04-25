import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useSettings } from '../contexts/Settings';

export default function Navbar() {
  const { theme } = useSettings();

  return (
    <NavbarStyled>
      <Link to='/'>
        <h1 className='Logo'>Se mexe!</h1>
      </Link>
      <div>
        <LinkStyled to='/'>Inicial</LinkStyled>
        <LinkStyled to='/session'>Inicie uma sessão</LinkStyled>
        <ButtonStyled onClick={theme.toggleTheme}>
          {theme.current.title === 'Light' ? 'Dark Mode' : 'Light Mode'}
        </ButtonStyled>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .Logo {
    font-size: 1.5rem;
    :hover {
      color: ${props => props.theme.colors.navbartext};
    }
  }
`;

const LinkStyled = styled(Link)`
  padding: 0.5rem;
  color: ${props => props.theme.colors.navbartext};
  :hover {
    color: ${props => props.theme.colors.navbarhover};
  }
`;

const ButtonStyled = styled.button`
  color: ${props => props.theme.colors.text};
  :hover {
    color: ${props => props.theme.colors.navbarhover};
  }
`;
