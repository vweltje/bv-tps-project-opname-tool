import {
  projectFormReducer,
  projectFormInitState
} from "./components/ProjectForm/projectFormReducer"
import {
  inputQuestionInitState,
  inputQuestionReducer
} from "./components/ProjectForm/InputQuestion/inputQuestionReducer"

export const initState = {
  projectForm: projectFormInitState,
  inputQuestion: inputQuestionInitState
}

export const reducer = (state, action) => {
  const mutatedAction = {
    type: action?.type ?? action,
    value: action?.value ?? undefined
  }
  return {
    projectForm: projectFormReducer(state.projectForm, mutatedAction),
    inputQuestion: inputQuestionReducer(state.inputQuestion, mutatedAction)
  }
}
