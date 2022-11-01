import axios from 'axios';

export class Api {
  #API_KEY = '1351fe1fee33f4dc7ca86c3a4fb4a61c';
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #GENRES_PATH_URL = 'genre/movie/list';
  #TRENDING_PATH_URL = 'trending/movie/day';
  #SEARCH_PATH_URL = 'search/movie';
  #GET_MOVIE_DETAILS_PATH_URL = 'movie/';

  #params = {
    api_key: this.#API_KEY,
    language: 'en-US',
  };

  async getGenres() {
    const url = `${this.#BASE_URL}${this.#GENRES_PATH_URL}`;
    const response = await axios(url, {
      params: { ...this.#params },
    });
    return response.data.genres;
  }

  async getTrendingMovies() {
    const url = `${this.#BASE_URL}${this.#TRENDING_PATH_URL}`;

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
    const url = `${this.#BASE_URL}${this.#SEARCH_PATH_URL}`;

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
    const url = `${this.#BASE_URL}${
      this.#GET_MOVIE_DETAILS_PATH_URL
    }${movieId}`;

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
    const url = `${this.#BASE_URL}${
      this.#GET_MOVIE_DETAILS_PATH_URL
    }${movieId}/credits`;

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
    const url = `${this.#BASE_URL}${
      this.#GET_MOVIE_DETAILS_PATH_URL
    }${movieId}/reviews`;

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
