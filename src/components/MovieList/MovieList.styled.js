import styled from '@emotion/styled';

export const MovieListStyled = styled.ul`
  margin-top: ${p => p.theme.space[3]}px;
  font-size: 18px;
  /* font-weight: 500; */

  a {
    display: block;
    padding-top: ${p => p.theme.space[1]}px;
    padding-bottom: ${p => p.theme.space[1]}px;

    &:hover,
    &:focus {
      color: ${p => p.theme.colors.accent};
    }
  }
`;
