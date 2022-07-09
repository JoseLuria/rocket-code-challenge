import { useContext } from "react";
import { ChatContext } from "../../../context";
import { FormContainer, FormInput, FormButton } from "./Form.styled";

export const Form = () => {
  const { updateStep, state } = useContext(ChatContext);

  const handleAddText = (e) => {
    e.preventDefault();

    if (state.blockInput) {
      return;
    }
    const inputText = e.target.text.value.trim();

    if (inputText.length === 0) {
      return;
    }

    updateStep(inputText);
    e.target.text.value = "";
  };

  return (
    <FormContainer onSubmit={(e) => handleAddText(e)}>
      <FormInput rows={1} name="text" placeholder="Ingresa tu texto" />
      <FormButton type="submit" disabled={state.blockInput}>
        Enviar
      </FormButton>
    </FormContainer>
  );
};
