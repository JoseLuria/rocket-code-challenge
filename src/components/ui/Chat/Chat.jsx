import { useEffect, useRef, useContext } from "react";
import { ChatContainer, ChatElements } from "./Chat.styled";
import { ChatElement } from "../";
import { ChatContext } from "../../../context";

export const Chat = () => {
  const botomScroll = useRef(null);
  const { state } = useContext(ChatContext);

  useEffect(() => {
    botomScroll.current.scrollIntoView({ behavior: "smooth" });
  }, [state.stepsElements]);

  return (
    <ChatContainer>
      <ChatElements>
        {state.stepsElements.map(({ stepNumber, response }) => (
          <ChatElement key={stepNumber} step={stepNumber} response={response} />
        ))}
        <div ref={botomScroll} />
      </ChatElements>
    </ChatContainer>
  );
};
