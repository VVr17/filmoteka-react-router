import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MovieListStyled } from './MovieList.styled';
import { object } from 'prop-types';

export const MovieList = ({
  movies,
  isMoviePage = false,
  previousLocation,
}) => {
  return (
    <MovieListStyled>
      {isMoviePage
        ? movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: `${previousLocation}` }}>
                {title}
              </Link>
            </li>
          ))
        : movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: `${previousLocation}` }}>
                {title}
              </Link>
            </li>
          ))}
    </MovieListStyled>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(object).isRequired,
  isMoviePage: PropTypes.bool,
  previousLocation: PropTypes.string.isRequired,
};
