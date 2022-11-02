import { FALLBACK_IMAGE_URL, IMAGE_BASE_API_URL } from 'constants/constants';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiService } from 'services/Api';
import { ActorCard } from './ActorCard/ActorCard';
import { CastList } from './Cast.styled';

const Cast = () => {
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

  if (!cast) return null;

  return (
    <CastList>
      {cast.map(({ id, profile_path, character, original_name }) => (
        <li key={id}>
          <ActorCard
            image={
              profile_path
                ? IMAGE_BASE_API_URL + profile_path
                : FALLBACK_IMAGE_URL
            }
            name={original_name}
            character={character}
          />
        </li>
      ))}
    </CastList>
  );
};

export default Cast;
