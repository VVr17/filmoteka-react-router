import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from 'services/Api';
import { ActorCard } from './ActorCard/ActorCard';
const apiService = new Api();

export const Cast = () => {
  const imageBaseUrl = `https://image.tmdb.org/t/p/w500`;
  const [cast, setCast] = useState(null);
  const params = useParams();

  useEffect(() => {
    getMovieCast();

    async function getMovieCast() {
      const cast = await apiService.getMovieCreditsById(params.movieId);
      setCast(cast);
    }
  }, [params.movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, profile_path, character, original_name }) => (
            <li key={id}>
              <ActorCard
                image={imageBaseUrl + profile_path}
                name={original_name}
                character={character}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

// propTypes
