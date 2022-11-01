import styled from '@emotion/styled';

export const MovieListStyled = styled.ul`
  margin-top: ${p => p.theme.space[3]}px;
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
