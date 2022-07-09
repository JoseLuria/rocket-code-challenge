export const ChatReducer = (state, action) => {
  switch (action.type) {
    case "Chat - Update step":
      return {
        ...state,
        stepsElements: action.payload,
        actualStep: state.actualStep + 1,
      };
    case "Chat - Next step":
      return {
        ...state,
        stepsElements: [
          ...state.stepsElements,
          { stepNumber: state.actualStep, response: null },
        ],
        blockInput: state.actualStep === 3 ? true : false,
      };
    case "Chat - Update user data":
      return {
        ...state,
        userData: action.payload,
      };
    case "Chat - Show user data":
      return {
        ...state,
        stepsElements: action.payload,
      };
    default:
      return state;
  }
};
