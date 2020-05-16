import {
  projectFormReducer,
  projectFormInitState
} from "./components/ProjectForm/projectFormReducer"

export const initState = {
  projectForm: projectFormInitState
}

export const reducer = (state, action) => {
  const mutatedAction = {
    type: action?.type ?? action,
    value: action?.value ?? undefined
  }
  return {
    projectForm: projectFormReducer(state.projectForm, mutatedAction),
  }
}
