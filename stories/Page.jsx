import React from 'react';

import { Header } from './Header';
import { Board } from './Board';

import './page.css';

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <div>
      <Header />
      <Board />
    </div>

    
  );
};
