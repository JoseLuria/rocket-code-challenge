import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  background-color: var(--pink);
  padding: 3rem 1.125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.8rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const HeaderText = styled.p`
  display: flex;
  align-items: center;
  gap: 0.313rem;
`;

export const HeaderIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.125rem;
`;

export const HeaderProgress = styled.progress`
  width: 100%;
  height: 0.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  border: none;
  background-color: var(--dark-pink);

  &::-webkit-progress-bar {
    background-color: var(--dark-pink);
    border-radius: 0;
  }

  &::-webkit-progress-value {
    background-color: var(--red);
  }

  &::-moz-progress-bar {
    background-color: var(--red);
    border-radius: 0;
  }
`;
