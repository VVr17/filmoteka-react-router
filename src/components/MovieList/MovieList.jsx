import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MovieListStyled } from './MovieList.styled';
import { object } from 'prop-types';

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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(object).isRequired,
  isMoviePage: PropTypes.bool,
};
