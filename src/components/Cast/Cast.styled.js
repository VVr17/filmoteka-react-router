const { default: styled } = require('@emotion/styled');

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  li {
    flex-basis: calc((100% - 80px) / 4);
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;
