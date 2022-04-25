import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div style={{ textAlign: 'center' }}>
        <h1>Se mexe!</h1>
        <p>Um app para te lembrar de se mexer regularmente.</p>
      </div>
    </React.Fragment>
  );
};

export default App;
