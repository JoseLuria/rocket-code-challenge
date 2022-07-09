import {
  QuestionWrapper,
  QuestionCustomer,
  CustomerAvatar,
  CustomerIcon,
  QuestionContainer,
  QuestionTitle,
  QuestionElement,
} from "./Question.styled";

export const Question = ({ title, elements }) => {
  return (
    <QuestionWrapper>
      <QuestionCustomer>
        <CustomerAvatar
          src="/assets/customer-avatar.png"
          alt="Customer Avatar"
        />
        <CustomerIcon>
          <img src="/assets/headphones-icon.svg" alt="Headphones Icon" />
        </CustomerIcon>
      </QuestionCustomer>
      <QuestionContainer>
        <QuestionTitle>{title}</QuestionTitle>
        {elements.length > 0 &&
          elements.map(({ text }, index) => (
            <QuestionElement key={index}>{text}</QuestionElement>
          ))}
      </QuestionContainer>
    </QuestionWrapper>
  );
};
