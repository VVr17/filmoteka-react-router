import styled from '@emotion/styled';

export const MovieCardStyled = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  /* display: flex; */
  border-radius: 5px;
  box-shadow: ${p => p.theme.boxShadow.second};

  @media screen and (min-width: 768px) {
    display: flex;
  }

  h2 {
    margin-bottom: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.accentTextColor};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;

  @media screen and (max-width: 767.98px) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 300px;
    margin-right: ${p => p.theme.space[4]}px;
  }

  img {
    width: 100%;
    border-radius: 5px;

    @media screen and (min-width: 768px) {
      width: 200px;
    }
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
