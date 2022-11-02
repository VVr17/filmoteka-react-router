// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { ToastContainer } from 'react-toastify';

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

// const Cast = lazy(() => import('../Cast/Cast'));
// const MovieDetails = lazy(() =>
//   import('../../pages/MovieDetails/MovieDetails')
// );
// const Movies = lazy(() => import('../../pages/Movies/Movies'));
// const Reviews = lazy(() => import('../Reviews/Reviews'));
// const Home = lazy(() => import('../../pages/Home/Home'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
};
