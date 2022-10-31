import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'constants/theme';

import { Api } from './services/Api';
const apiService = new Api();
// apiService.getGenres();
apiService.getTrendingMovies();
// apiService.searchByKeyWord('matrix');
// apiService.getMovieDetailsById(603);
// apiService.getMovieCreditsById(603);
// apiService.getMovieReviewsById(603);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
