import React from 'react';
import PropTypes from 'prop-types';
import { MovieCardItemStyled } from './MovieCardItem.styled';

export const MovieCardItem = ({ title, image }) => {
  return (
    <MovieCardItemStyled>
      <img src={image} alt={title} width="200px" height="300px" />
      <h3>{title}</h3>
    </MovieCardItemStyled>
  );
};
MovieCardItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
