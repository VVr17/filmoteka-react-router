import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MovieListStyled } from './MovieList.styled';
import { MovieCardItem } from './MovieCardItem/MovieCardItem';
import { FALLBACK_IMAGE_URL, IMAGE_BASE_API_URL } from 'constants/constants';

export const MovieList = ({
  movies,
  isMoviePage = false,
  previousLocation,
}) => (
  <MovieListStyled>
    {isMoviePage
      ? movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: `${previousLocation}` }}>
              <MovieCardItem
                title={title}
                image={
                  poster_path
                    ? IMAGE_BASE_API_URL + poster_path
                    : FALLBACK_IMAGE_URL
                }
              />
            </Link>
          </li>
        ))
      : movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: `${previousLocation}` }}>
              <MovieCardItem
                title={title}
                image={
                  poster_path
                    ? IMAGE_BASE_API_URL + poster_path
                    : FALLBACK_IMAGE_URL
                }
              />
            </Link>
          </li>
        ))}
  </MovieListStyled>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMoviePage: PropTypes.bool,
  previousLocation: PropTypes.string.isRequired,
};
