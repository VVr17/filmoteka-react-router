import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const navItems = [
  { to: 'cast', text: 'Cast' },
  { to: 'reviews', text: 'Reviews' },
];
export const MovieDetails = () => {
  const params = useParams();
  console.log('params', params.movieId);

  return (
    <main>
      <div>MovieDetails {params.movieId}</div>
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
