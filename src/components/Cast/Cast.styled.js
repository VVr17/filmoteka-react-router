const { default: styled } = require('@emotion/styled');

export const CastList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  li {
    border-radius: 5px;
    box-shadow: ${p => p.theme.boxShadow.second};
    text-align: center;

    @media screen and (min-width: 768px) {
      flex-basis: calc((100% - 3 * ${p => p.theme.space[3]}px) / 4);
    }

    @media screen and (min-width: 1200px) {
      flex-basis: calc((100% - 5 * ${p => p.theme.space[3]}px) / 6);
    }
  }
`;
