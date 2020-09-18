import React, { FC } from 'react';
import Main from './pages/Main';
import { GlobalStyle } from './styles/index';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
};

export default App;
