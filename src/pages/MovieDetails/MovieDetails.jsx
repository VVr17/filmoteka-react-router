import { FALLBACK_IMAGE_URL, IMAGE_BASE_API_URL } from 'constants/constants';
import React, { Suspense, useEffect, useRef, useState } from 'react';
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

const MovieDetails = () => {
  const params = useParams(); // from <Route path="movies/:movieId" element={<MovieDetails />}>
  const [movie, setMovie] = useState(null);
  const location = useLocation(); // location according to URL
  /* go back to previous page OR default Home page if location null*/
  const previousPage = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    getMovieDetails();

    async function getMovieDetails() {
      const movieDetails = await apiService.getMovieDetailsById(params.movieId);
      const { genres, original_title, poster_path, overview, vote_average } =
        movieDetails;

      setMovie({
        genres: genres.map(genre => genre.name),
        title: original_title,
        image: poster_path
          ? IMAGE_BASE_API_URL + poster_path
          : FALLBACK_IMAGE_URL,
        overview: overview,
        rating: vote_average,
      });
    }
  }, [params.movieId]);

  if (!movie) return null;

  const { genres, title, image, overview, rating } = movie;

  return (
    <Container>
      <LinkGoBack to={previousPage.current}>Go Back</LinkGoBack>
      <MovieCard
        genres={genres}
        title={title}
        image={image}
        overview={overview}
        rating={rating}
      />
      <AdditionalInfo>
        <h2>Additional Information</h2>
        <LinkList>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </LinkList>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </AdditionalInfo>
    </Container>
  );
};

export default MovieDetails;
