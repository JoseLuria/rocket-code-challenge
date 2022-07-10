import styled from "styled-components";

export const ChatContainer = styled.main`
  width: 100%;
  flex-grow: 1;
  padding: 1.5rem 1.125rem;
  overflow: auto;

  scrollbar-width: 0.938rem;
  scrollbar-color: var(--low-black) transparent;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--low-black);
    border-radius: 0.375rem;
  }
`;

export const ChatElements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
