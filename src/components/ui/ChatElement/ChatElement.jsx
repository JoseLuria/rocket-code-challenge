import { useContext, useState } from "react";
import { Question, Response, Button } from "../";
import { ChatContext } from "../../../context";
import QuestionsData from "../../../data/questions.json";

export const ChatElement = ({ step, response }) => {
  const [disbledButton, setDisabledButton] = useState(false);
  const { state, showUserData } = useContext(ChatContext);
  const question = QuestionsData[step];

  const { fullName, bornDate, phone, email } = state.userData;

  const showFinalData = () => {
    const userDataText = `Fecha de nacimiento: ${bornDate}\nCorreo electrónico: ${email}\nTeléfono celular: ${phone}\nNombre: ${fullName}`;
    showUserData(userDataText);
    setDisabledButton(true);
  };

  return (
    <>
      <Question title={question.title} elements={question.elements} />
      {step === 3 && (
        <Button onClick={showFinalData} disabled={disbledButton}>
          Iniciar
        </Button>
      )}
      {response && <Response text={response} />}
    </>
  );
};
