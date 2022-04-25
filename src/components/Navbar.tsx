import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useSettings } from '../contexts/Settings';

export default function Navbar() {
  const { theme } = useSettings();

  return (
    <NavbarStyled>
      <Link to='/'>
        <h1>Se mexe!</h1>
      </Link>
      <div>
        <LinkStyled to='/'>Inicial</LinkStyled>
        <LinkStyled to='/session'>Inicie uma sessão</LinkStyled>
        <LinkStyled to='/session'>Apagar os dados</LinkStyled>
        <button onClick={theme.toggleTheme}>Tema</button>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkStyled = styled(Link)`
  padding: 0.5rem;
  :hover {
    color: var(--blue);
  }
`;
