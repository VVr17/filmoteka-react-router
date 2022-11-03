import styled from '@emotion/styled';

export const ReviewList = styled.ul`
  li {
    padding: ${p => p.theme.space[3]}px;
    border-radius: 5px;
    box-shadow: ${p => p.theme.boxShadow.second};
    max-height: 300px;
    overflow-y: scroll;

    @media screen and (max-width: 479.98px) {
      overflow-x: scroll;
    }

    &:not(:last-of-type) {
      margin-bottom: ${p => p.theme.space[2]}px;
    }
  }

  h3 {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;
