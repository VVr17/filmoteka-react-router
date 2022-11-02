import styled from '@emotion/styled';

export const Container = styled.main`
  padding: ${p => p.theme.space[4]}px;

  h2 {
    color: ${p => p.theme.colors.accentTextColor};
  }
`;
