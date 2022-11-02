import React from 'react';
import PropTypes from 'prop-types';
import { SearchingFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => (
  <SearchingFormStyled onSubmit={onSubmit}>
    <label>
      Search
      <input
        name="query"
        type="text"
        placeholder="Please, enter keyword for searching"
      />
    </label>
  </SearchingFormStyled>
);

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
