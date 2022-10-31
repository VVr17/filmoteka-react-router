import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  /* min-height: 80px; */
  padding: 20px;
  background-color: ${p => p.theme.colors.accentBackgroundColor};
`;

export const Link = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  font-size: 20px;
  font-weight: 700;

  &:not(:last-of-type) {
    margin-right: 20px;
  }

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;
