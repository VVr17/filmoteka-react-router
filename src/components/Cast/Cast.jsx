import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from 'services/Api';
import { ActorCard } from './ActorCard/ActorCard';
import { CastList } from './Cast.styled';
const apiService = new Api();
const imageBaseUrl = `https://image.tmdb.org/t/p/w500`;
const templateUrl = `https://i.postimg.cc/htSNfpBY/movie-card-plug.jpg`;

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const params = useParams();

  useEffect(() => {
    getMovieCast();

    async function getMovieCast() {
      const cast = await apiService.getMovieCreditsById(params.movieId);
      const actors = cast.length > 20 ? cast.slice(0, 20) : cast;
      setCast(actors);
    }
  }, [params.movieId]);

  return (
    <>
      {cast && (
        <CastList>
          {cast.map(({ id, profile_path, character, original_name }) => (
            <li key={id}>
              <ActorCard
                image={profile_path ? imageBaseUrl + profile_path : templateUrl}
                name={original_name}
                character={character}
              />
            </li>
          ))}
        </CastList>
      )}
    </>
  );
};
