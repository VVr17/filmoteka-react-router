import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const navItems = [
  { to: 'cast', text: 'Cast' },
  { to: 'reviews', text: 'Reviews' },
];
export const MovieDetails = () => {
  return (
    <main>
      <div>MovieDetails</div>
      <ul>
        {navItems.map(({ to, text }) => (
          <Link key={to} to={to}>
            {text}
          </Link>
        ))}
      </ul>
      <Outlet />
    </main>
  );
};
