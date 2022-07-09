import { ButtonMain } from "./Button.styled";

export const Button = ({ children, disabled, onClick }) => {
  return (
    <ButtonMain onClick={onClick} disabled={disabled}>
      {children}
    </ButtonMain>
  );
};
