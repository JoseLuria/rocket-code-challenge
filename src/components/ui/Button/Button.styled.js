import styled from "styled-components";

export const ButtonMain = styled.button`
  background-color: var(--red);
  color: var(--white);
  padding: 0.5rem 1rem;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    background-color: var(--low-pink);
    cursor: not-allowed;
  }
`;
