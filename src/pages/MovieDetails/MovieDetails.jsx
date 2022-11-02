import { FALLBACK_IMAGE_URL, IMAGE_BASE_API_URL } from 'constants/constants';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { apiService } from 'services/Api';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import {
  AdditionalInfo,
  Container,
  LinkGoBack,
  LinkList,
} from './MovieDetails.styled';

const navItems = [
  { to: 'cast', text: 'Cast' },
  { to: 'reviews', text: 'Reviews' },
];
//!  href // label

export const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails();

    async function getMovieDetails() {
      const movieDetails = await apiService.getMovieDetailsById(params.movieId);

      setMovie({
        genres: movieDetails.genres.map(genre => genre.name),
        title: movieDetails.original_title,
        image: movieDetails.poster_path
          ? IMAGE_BASE_API_URL + movieDetails.poster_path
          : FALLBACK_IMAGE_URL,
        overview: movieDetails.overview,
        rating: movieDetails.vote_average,
      });
    }
  }, [params.movieId]);

  return (
    <Container>
      <LinkGoBack to="/">Go Back ??? </LinkGoBack>
      {movie && (
        <MovieCard
          genres={movie.genres}
          title={movie.title}
          image={movie.image}
          overview={movie.overview}
          rating={movie.rating}
        />
      )}
      <AdditionalInfo>
        <h2>Additional Information</h2>
        <LinkList>
          {navItems.map(({ to, text }) => (
            <li key={to}>
              <Link to={to}>{text}</Link>
            </li>
          ))}
        </LinkList>
        <Outlet />
      </AdditionalInfo>
    </Container>
  );
};

// const LOCAL_STORAGE_KEY = 'genres'

// const genres = useRef([]);

// getGenres();
// async function getGenres() {
//   const genresFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
//   if (genresFromLocalStorage) {
//     genres.current = JSON.parse(genresFromLocalStorage);
//     return;
//   }
//   try {
//     genres.current = await apiService.getGenres();
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(genres.current));
//   } catch (error) {
//     console.log(error);
//   }
// }
