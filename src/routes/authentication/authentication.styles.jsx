import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
