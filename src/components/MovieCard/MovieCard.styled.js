import styled from '@emotion/styled';

export const MovieCardStyled = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 300px;
  margin-right: ${p => p.theme.space[4]}px;
  border-radius: 5px;

  img {
    width: 200px;
    border-radius: 5px;
  }
`;

export const Rating = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Overview = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  h3 {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const Genres = styled.div`
  h3 {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;
