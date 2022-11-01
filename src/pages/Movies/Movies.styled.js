import styled from '@emotion/styled';

export const Container = styled.main`
  padding: ${p => p.theme.space[4]}px;
`;

export const SearchingForm = styled.form`
  label {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-top: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[2]}px;
    border-radius: 4px;
  }
`;
