import { Container } from 'components/App/App.styled';
import { AppBar } from 'components/AppBar/AppBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};
