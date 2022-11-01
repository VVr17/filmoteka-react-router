import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  padding: ${p => p.theme.space[4]}px;
`;

export const AdditionalInfo = styled.div`
  h2 {
    font-size: 20px;
  }

  ul {
    margin-top: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }

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

export const LinkGoBack = styled(Link)`
  display: block;
  min-width: 60px;
  max-width: 140px;
  padding: ${p => p.theme.space[1]}px;
  border: 1px solid ${p => p.theme.colors.accentTextColor};
  color: ${p => p.theme.colors.accentTextColor};
  border-radius: 4px;
  margin-bottom: ${p => p.theme.space[3]}px;
  text-align: center;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;
