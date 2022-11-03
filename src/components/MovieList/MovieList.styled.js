import styled from '@emotion/styled';

export const MovieListStyled = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  font-size: 18px;
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  flex-direction: column;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) {
    margin-top: ${p => p.theme.space[5]}px;
  }

  li {
    border-radius: 5px;
    box-shadow: ${p => p.theme.boxShadow.second};
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      transform: scale(1.03);
      color: ${p => p.theme.colors.accent};
    }
    @media screen and (min-width: 480px) {
      flex-basis: calc((100% - ${p => p.theme.space[3]}px) / 2);
    }

    @media screen and (min-width: 768px) {
      flex-basis: calc((100% - 2 * ${p => p.theme.space[3]}px) / 3);
    }

    @media screen and (min-width: 1200px) {
      flex-basis: calc((100% - 3 * ${p => p.theme.space[3]}px) / 4);
    }
  }

  a {
    display: block;
    padding-top: ${p => p.theme.space[1]}px;
    padding-left: ${p => p.theme.space[1]}px;
    padding-right: ${p => p.theme.space[1]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
  }
`;
