import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from 'services/Api';
import { Review } from './Reviews.styled';

const apiService = new Api();

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
    <div>
      {reviews && reviews.length === 0 && (
        <p>We do not have any reviews for this movie</p>
      )}
      {reviews && reviews.length !== 0 && (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <Review key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </Review>
            );
          })}
        </ul>
      )}
    </div>
  );
};
