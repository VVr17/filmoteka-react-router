import React from 'react';
import { useState, useEffect } from 'react';
import { apiService } from 'services/Api';
import { Container } from './Home.styled';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();

    async function getPopularMovies() {
      try {
        const results = await apiService.getTrendingMovies();
        setMovies([...results]);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <Container>
      <h2>Trending Today</h2>
      {movies.length > 0 && <MovieList movies={movies} />}
    </Container>
  );
};
