import React from 'react';
import { Header, Link } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="movies">Movie</Link>
      </nav>
    </Header>
  );
};
