import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { apiService } from 'services/Api';
import { Container } from './Movies.styled';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { toast } from 'react-toastify'; // Notifications

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    getMovies(query);

    async function getMovies(query) {
      try {
        const results = await apiService.searchByKeyWord(query);

        if (results.length === 0) {
          toast.warn(`There are no movies found. Please, try again`);
        }

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
      toast.warn(`Query field cannot be empty`);
      return;
    }

    setSearchParams({ query: queryTrimmed });
    event.target.reset();
  };

  return (
    <Container>
      <SearchForm onSubmit={onSubmit} />
      {movies.length > 0 && (
        <>
          <h2>Upon your query "{query}" we found</h2>
          <MovieList
            movies={movies}
            isMoviePage={true}
            previousLocation={location.pathname + location.search}
          />
        </>
      )}
    </Container>
  );
};

export default Movies;
