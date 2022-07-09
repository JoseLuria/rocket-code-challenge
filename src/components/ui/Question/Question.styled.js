import styled from "styled-components";

export const QuestionWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.625rem;
`;

export const QuestionCustomer = styled.div`
  position: relative;
  height: fit-content;
  padding: 0.125rem;
`;

export const CustomerAvatar = styled.img`
  border-radius: 1.563rem;
  border: solid var(--pink) 0.125rem;
`;

export const CustomerIcon = styled.div`
  width: 1.563rem;
  height: 1.563rem;
  background-color: var(--pink);
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionContainer = styled.div`
  width: 100%;
  max-width: 30rem;
  background-color: var(--low-gray);
  padding: 1.375rem 1.125rem;
  border-radius: 0.313rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const QuestionTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.875rem;
  white-space: pre-wrap;
`;

export const QuestionElement = styled.section`
  width: 100%;
  padding: 1.125rem;
  border: solid var(--gray) 0.188rem;
  font-size: 1rem;
  border-radius: 0.125rem;
`;
