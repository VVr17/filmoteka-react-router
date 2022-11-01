import React from 'react';
import { useState } from 'react';
import { Api } from 'services/Api';
import { Container, SearchingForm } from './Movies.styled';
import { MovieList } from 'components/MovieList/MovieList';

// ! на search должны добавляться параметры
//! ?query=batman

const apiService = new Api();

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const onSubmit = async event => {
    event.preventDefault();
    const { query } = event.target.elements;
    try {
      const results = await apiService.searchByKeyWord(query.value);
      setMovies([...results]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <SearchingForm onSubmit={onSubmit}>
        <label>
          Search
          <input
            name="query"
            type="text"
            placeholder="Please, enter keyword for searching"
          />
        </label>
      </SearchingForm>
      {movies.length > 0 && <MovieList movies={movies} isMoviePage={true} />}
    </Container>
  );
};
