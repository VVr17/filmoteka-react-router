const { default: styled } = require('@emotion/styled');

export const CastList = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  li {
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1);
    text-align: center;

    @media screen and (min-width: 768px) {
      flex-basis: calc((100% - 60px) / 4);
    }

    @media screen and (min-width: 1200px) {
      flex-basis: calc((100% - 100px) / 6);
    }
  }
`;
