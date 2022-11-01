import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './ActorCard.styled';

export const ActorCard = ({ image, character, name }) => {
  return (
    <Card>
      <img src={image} alt={name} width="100px" height="150px" />
      <p>
        name: <span>{name}</span>
      </p>
      <p>
        character: <span>{character}</span>
      </p>
    </Card>
  );
};

ActorCard.propTypes = {
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
