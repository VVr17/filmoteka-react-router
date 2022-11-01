import styled from '@emotion/styled';

export const Card = styled.div`
  padding-top: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[1]}px;
  padding-right: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  img {
    width: 100%;
    height: auto;
    margin-bottom: ${p => p.theme.space[2]}px;
    border-radius: 5px;
  }

  p {
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
  }

  span {
    display: block;
  }
`;
