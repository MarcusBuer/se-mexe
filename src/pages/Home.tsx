import React from 'react';
import { Link } from 'react-router-dom';

import Session from './Session';

export default function Home() {
  return (
    <>
      <div>
        <h1>Se mexe!</h1>
        <p>Um app para te lembrar de se mexer regularmente.</p>
        <Link to='/session'> Inicie uma sessão </Link>
      </div>
    </>
  );
}
