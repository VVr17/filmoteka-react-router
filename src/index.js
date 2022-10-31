import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { Api } from './services/Api';
const apiService = new Api();
apiService.getGenres();
apiService.getTrendingMovies();
apiService.searchByKeyWord('matrix');
apiService.getMovieDetailsById(603);
apiService.getMovieCreditsById(603);
apiService.getMovieReviewsById(603);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
