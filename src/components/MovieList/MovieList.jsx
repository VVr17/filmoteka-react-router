import React from 'react';
import { Link } from 'react-router-dom';
import { MovieListStyled } from './MovieList.styled';

export const MovieList = ({ movies, isMoviePage = false }) => {
  return (
    <MovieListStyled>
      {isMoviePage
        ? movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))
        : movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          ))}
    </MovieListStyled>
  );
};
