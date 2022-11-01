import styled from '@emotion/styled';

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
