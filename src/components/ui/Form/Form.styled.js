import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  padding: 1.125rem 1.5rem;
  border-top: solid var(--low-white) 0.125rem;
  display: flex;
  gap: 0.5rem;
  font-size: 1rem;
`;

export const FormInput = styled.textarea`
  width: 100%;
  background-color: var(--low-white);
  padding: 0.75rem;
  border-radius: 0.25rem;
  resize: none;
`;

export const FormButton = styled.button`
  height: 100%;
  padding: 0 1.5rem;
  background-color: var(--black);
  border-radius: 0.25rem;
  color: var(--white);
  cursor: pointer;

  &:disabled {
    background-color: var(--low-black);
    cursor: not-allowed;
  }
`;
