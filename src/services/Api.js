import axios from 'axios';
import {
  API_KEY,
  BASE_URL,
  GET_CREDIT_URL,
  GET_MOVIE_DETAILS_PATH_URL,
  GET_REVIEWS_URL,
  SEARCH_PATH_URL,
  TRENDING_PATH_URL,
} from 'constants/constants';

class Api {
  #params = {
    api_key: API_KEY,
    language: 'en-US',
  };

  async getTrendingMovies() {
    const url = `${BASE_URL}${TRENDING_PATH_URL}`;

    try {
      const response = await axios.get(url, {
        params: { ...this.#params, page: 1 },
      });
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async searchByKeyWord(query) {
    const url = `${BASE_URL}${SEARCH_PATH_URL}`;

    try {
      const response = await axios.get(url, {
        params: { ...this.#params, query: query, page: 1 },
      });
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async getMovieDetailsById(movieId) {
    const url = `${BASE_URL}${GET_MOVIE_DETAILS_PATH_URL}${movieId}`;

    try {
      const response = await axios.get(url, {
        params: { ...this.#params },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getMovieCreditsById(movieId) {
    const url = `${BASE_URL}${GET_MOVIE_DETAILS_PATH_URL}${movieId}${GET_CREDIT_URL}`;

    try {
      const response = await axios.get(url, {
        params: { ...this.#params },
      });
      return response.data.cast;
    } catch (error) {
      console.log(error);
    }
  }

  async getMovieReviewsById(movieId) {
    const url = `${BASE_URL}${GET_MOVIE_DETAILS_PATH_URL}${movieId}${GET_REVIEWS_URL}`;

    try {
      const response = await axios.get(url, {
        params: { ...this.#params, page: 1 },
      });
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
}

export const apiService = new Api();
