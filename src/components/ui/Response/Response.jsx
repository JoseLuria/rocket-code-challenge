import { ResponseWrapper, ResponseElement } from "./Response.styled";

export const Response = ({ text }) => {
  return (
    <ResponseWrapper>
      <ResponseElement>{text}</ResponseElement>
    </ResponseWrapper>
  );
};
