import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { apiService } from 'services/Api';
import { Container, SearchingForm } from './Movies.styled';
import { MovieList } from 'components/MovieList/MovieList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  // console.log('location', location.pathname + location.search);

  useEffect(() => {
    if (!query) return;

    getMovies(query);

    async function getMovies(query) {
      try {
        const results = await apiService.searchByKeyWord(query);
        setMovies([...results]);
      } catch (error) {
        console.log(error);
      }
    }
  }, [query]);

  const onSubmit = event => {
    event.preventDefault();
    const { query } = event.target.elements;
    const queryTrimmed = query.value.trim();

    if (!queryTrimmed) {
      alert('query field cannot be empty');
      return;
    }

    setSearchParams({ query: queryTrimmed });
    event.target.reset();
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
      {!query && <p>Please, enter query to find movies</p>}
      {movies.length === 0 && query && (
        <p>There are no movies found. Please, try again</p>
      )}
      {movies.length > 0 && (
        <MovieList
          movies={movies}
          isMoviePage={true}
          previousLocation={location.pathname + location.search}
        />
      )}
    </Container>
  );
};
