import styled from '@emotion/styled';

export const ReviewList = styled.ul`
  li {
    padding: ${p => p.theme.space[3]}px;
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1);
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
