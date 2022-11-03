import styled from '@emotion/styled';

export const Container = styled.main`
  padding: ${p => p.theme.space[4]}px;

  h2 {
    text-align: center;
    color: ${p => p.theme.colors.accentTextColor};
    font-size: 24px;

    @media screen and (min-width: 768px) {
      font-size: 30px;
    }

    @media screen and (min-width: 1200px) {
      font-size: 36px;
    }
  }
`;
