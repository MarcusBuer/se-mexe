import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  toggleTheme: () => void;
}

export default function Navbar({ toggleTheme }: Props) {
  return (
    <NavbarStyled>
      <Link to='/'>
        <h1>Se mexe!</h1>
      </Link>
      <div>
        <LinkStyled to='/'>Inicial</LinkStyled>
        <LinkStyled to='/session'>Inicie uma sessão</LinkStyled>
        <LinkStyled to='/session'>Apagar os dados</LinkStyled>
        <button onClick={toggleTheme}>Tema</button>
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
