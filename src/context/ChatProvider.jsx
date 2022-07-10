import { useReducer } from "react";
import { ChatContext, ChatReducer } from ".";
import { asignData } from "../utils";

const INITIAL_STATE = {
  actualStep: 0,
  stepsElements: [
    {
      stepNumber: 0,
      response: null,
    },
  ],
  userData: {
    fullName: "",
    bornDate: "",
    phone: "",
    email: "",
  },
  blockInput: false,
};

export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ChatReducer, INITIAL_STATE);

  const updateUserData = (text) => {
    switch (state.actualStep) {
      case 0:
        return {
          ...state.userData,
          fullName: text,
        };
      case 1:
        return {
          ...state.userData,
          bornDate: text,
        };
      case 2:
        return asignData(text, state.userData);
      default:
        return state.userData;
    }
  };

  const updateStep = (response) => {
    const filteredSteps = state.stepsElements.filter(
      ({ stepNumber }) => stepNumber !== state.actualStep
    );

    const stepToUpdate = { stepNumber: state.actualStep, response };
    const upatedSteps = [...filteredSteps, stepToUpdate];
    dispatch({ type: "Chat - Update step", payload: upatedSteps });
    const dataUpdated = updateUserData(response);
    dispatch({ type: "Chat - Update user data", payload: dataUpdated });

    if (state.actualStep <= 3) {
      setTimeout(() => {
        dispatch({ type: "Chat - Next step" });
      }, 200);
    }
  };

  const showUserData = (response) => {
    const filteredSteps = state.stepsElements.filter(
      ({ stepNumber }) => stepNumber !== state.actualStep
    );
    const stepToUpdate = { stepNumber: state.actualStep, response };
    const upatedSteps = [...filteredSteps, stepToUpdate];
    dispatch({ type: "Chat - Show user data", payload: upatedSteps });
    sessionStorage.setItem("user", JSON.stringify(state.userData));
  };

  return (
    <ChatContext.Provider
      value={{
        state,
        updateStep,
        showUserData,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
