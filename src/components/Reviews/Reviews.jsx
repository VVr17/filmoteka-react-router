import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiService } from 'services/Api';
import { ReviewList } from './Reviews.styled';

export const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews();

    async function getReviews() {
      const reviews = await apiService.getMovieReviewsById(params.movieId);
      setReviews(reviews);
    }
  }, [params.movieId]);

  return (
    <>
      {reviews && reviews.length === 0 && (
        <p>We do not have any reviews for this movie</p>
      )}
      {reviews && reviews.length !== 0 && (
        <ReviewList>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ReviewList>
      )}
    </>
  );
};
