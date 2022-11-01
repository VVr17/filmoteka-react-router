import React from 'react';
import { useParams } from 'react-router-dom';

// apiService.getMovieReviewsById(603);

export const Reviews = () => {
  const params = useParams();

  return (
    <div>
      <p>We do not have any reviews for this movie</p>
      <ul>
        <li>review1 {params.movieId}</li>
        <li>review1</li>
        <li>review1</li>
      </ul>
    </div>
  );
};
