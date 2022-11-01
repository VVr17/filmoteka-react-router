import styled from '@emotion/styled';

export const MovieCardStyled = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  display: flex;

  h2 {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 300px;
  margin-right: ${p => p.theme.space[4]}px;

  img {
    width: 200px;
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
