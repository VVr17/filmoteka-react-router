import { FALLBACK_IMAGE_URL, IMAGE_BASE_API_URL } from 'constants/constants';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { apiService } from 'services/Api';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import {
  AdditionalInfo,
  Container,
  LinkGoBack,
  LinkList,
} from './MovieDetails.styled';

const navItems = [
  { href: 'cast', label: 'Cast' },
  { href: 'reviews', label: 'Reviews' },
];

export const MovieDetails = () => {
  const params = useParams(); // from <Route path="movies/:movieId" element={<MovieDetails />}>
  const [movie, setMovie] = useState(null);
  const location = useLocation(); // location according to URL
  /* go back to previous page OR default Home page if location null*/
  const previousPage = useRef(location?.state?.from ?? '/');
  console.log('location', previousPage);

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
      <LinkGoBack to={previousPage.current}>Go Back</LinkGoBack>
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
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </LinkList>
        <Outlet />
      </AdditionalInfo>
    </Container>
  );
};
