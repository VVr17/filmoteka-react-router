import React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

const results = [
  {
    adult: false,
    backdrop_path: '/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg',
    id: 49046,
    title: 'All Quiet on the Western Front',
    original_language: 'de',
    original_title: 'Im Westen nichts Neues',
    overview:
      'Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.',
    poster_path: '/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg',
    media_type: 'movie',
    genre_ids: [28, 18, 36, 10752],
    popularity: 160.416,
    release_date: '2022-10-07',
    video: false,
    vote_average: 8.2,
    vote_count: 170,
  },
  {
    adult: false,
    backdrop_path: '/bUjPcNS8GweBh5Nxp8oq9Dy712Z.jpg',
    id: 913290,
    title: 'Barbarian',
    original_language: 'en',
    original_title: 'Barbarian',
    overview:
      'In town for a job interview, a young woman arrives at her Airbnb late at night only to find that it has been mistakenly double-booked and a strange man is already staying there. Against her better judgement, she decides to stay the night anyway, but soon discovers that there is much more to be afraid of in the house than the other guest.',
    poster_path: '/idT5mnqPcJgSkvpDX7pJffBzdVH.jpg',
    media_type: 'movie',
    genre_ids: [27, 9648, 53],
    popularity: 1034.293,
    release_date: '2022-09-08',
    video: false,
    vote_average: 7.022,
    vote_count: 345,
  },
  {
    adult: false,
    backdrop_path: '/rV0xrSgkOQj2EpiG8n16VHHJeg3.jpg',
    id: 541134,
    title: 'The Good Nurse',
    original_language: 'en',
    original_title: 'The Good Nurse',
    overview:
      'Suspicious that her colleague is responsible for a series of mysterious patient deaths, a nurse risks her own life to uncover the truth in this gripping thriller based on true events.',
    poster_path: '/rSq6cq0LCcbro10jbEaPTEb3WmW.jpg',
    media_type: 'movie',
    genre_ids: [18, 80, 9648],
    popularity: 205.745,
    release_date: '2022-10-19',
    video: false,
    vote_average: 7.149,
    vote_count: 198,
  },
];

export const Home = () => {
  // const [movies, setMovies] = useState;

  return (
    <main>
      Home
      <ul>
        {results.map(movie => (
          <Link key={movie.id} to={`movies/${movie.id}`}>
            {movie.title}
          </Link>
        ))}
      </ul>
    </main>
  );
};
