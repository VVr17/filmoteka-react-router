import axios from 'axios';

export class Api {
  #API_KEY = '1351fe1fee33f4dc7ca86c3a4fb4a61c';
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #GENRES_PATH_URL = 'genre/movie/list';
  #BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  #TRENDING_PATH_URL = 'trending/movie/day';
  #SEARCH_PATH_URL = 'search/movie';
  #GET_MOVIE_DETAILS_PATH_URL = 'movie/';

  #params = {
    api_key: this.#API_KEY,
    language: 'en-US',
    // include_adult: false,
  };

  // https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
  async getGenres() {
    const url = `${this.#BASE_URL}${this.#GENRES_PATH_URL}`;
    const response = await axios(url, {
      params: { ...this.#params },
    });

    console.log('genres', response.data.genres);
  }

  // getImages() {
  // "poster_path": "/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
  // movie.poster_path = this.#BASE_IMAGE_URL + movie.poster_path;
  // }

  // /trending/get-trending
  async getTrendingMovies() {
    // https://api.themoviedb.org/3/ trending/all/day ?api_key=<<api_key>>
    const url = `${this.#BASE_URL}${this.#TRENDING_PATH_URL}`;

    try {
      const response = await axios.get(url, {
        params: { ...this.#params, page: 1 },
      });
      console.log('response', response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // /search/search-movies
  // https://api.themoviedb.org/3/ search/movie ?api_key=<<api_key>>&language=en-US&page=1&include_adult=false&query=
  async searchByKeyWord(query) {
    const url = `${this.#BASE_URL}${this.#SEARCH_PATH_URL}`;

    try {
      const response = await axios.get(url, {
        params: { ...this.#params, query: query, page: 1 },
      });
      console.log('response', response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // /movies/get-movie-details
  // https://api.themoviedb.org/3/ movie/ {movie_id}?api_key=<<api_key>>&language=en-US
  async getMovieDetailsById(movieId) {
    const url = `${this.#BASE_URL}${
      this.#GET_MOVIE_DETAILS_PATH_URL
    }${movieId}`;

    try {
      const response = await axios.get(url, {
        params: { ...this.#params },
      });
      console.log('response', response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // /movies/get-movie-credits
  // https://api.themoviedb.org/3/ movie/ {movie_id}/credits?api_key=<<api_key>>&language=en-US
  async getMovieCreditsById(movieId) {
    const url = `${this.#BASE_URL}${
      this.#GET_MOVIE_DETAILS_PATH_URL
    }${movieId}/credits`;

    try {
      const response = await axios.get(url, {
        params: { ...this.#params },
      });
      console.log('response -cast', response.data.cast);
    } catch (error) {
      console.log(error);
    }
  }

  // /movies/get-movie-reviews
  // https://api.themoviedb.org/3/ movie/ {movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
  async getMovieReviewsById(movieId) {
    const url = `${this.#BASE_URL}${
      this.#GET_MOVIE_DETAILS_PATH_URL
    }${movieId}/reviews`;
    console.log('url', url);

    try {
      const response = await axios.get(url, {
        params: { ...this.#params, page: 1 },
      });
      console.log('response -review', response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
}
