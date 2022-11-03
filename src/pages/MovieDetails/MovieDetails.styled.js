import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  padding: ${p => p.theme.space[4]}px;
`;

export const AdditionalInfo = styled.div`
  h2 {
    font-size: 20px;
    color: ${p => p.theme.colors.accentTextColor};
  }
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 30px;
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;

  a {
    font-weight: 700;
    display: block;
    padding-top: ${p => p.theme.space[1]}px;
    padding-bottom: ${p => p.theme.space[1]}px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

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
  color: ${p => p.theme.colors.white};
  font-weight: 500;
  border-radius: 4px;
  margin-bottom: ${p => p.theme.space[3]}px;
  text-align: center;
  background-color: ${p => p.theme.colors.accentBackgroundColor};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;
