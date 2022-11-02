import React from 'react';
import { SearchingFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  return (
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
};
