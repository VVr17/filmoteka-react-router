import { Route, Routes } from 'react-router-dom';
import { Cast } from 'components/Cast/Cast';
import { Layout } from 'components/Layout/Layout';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Movies } from 'pages/Movies/Movies';
import { Reviews } from 'components/Reviews/Reviews';
import { Home } from 'pages/Home/Home';

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
    </>
  );
};
