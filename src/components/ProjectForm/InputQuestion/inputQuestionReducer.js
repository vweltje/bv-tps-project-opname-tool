export const inputQuestionInitState = {
  activeQuestion: false
}

export const inputQuestionReducer = (state, { type, value }) => {
  switch (type) {
    case "InputQuestion--setCurrentEditing":
      return {
        ...state,
        activeQuestion: value
      }
    default:
      return state
  }
}
