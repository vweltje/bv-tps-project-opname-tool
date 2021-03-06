import {
  projectFormReducer,
  projectFormInitState
} from "./components/ProjectForm/projectFormReducer"
import {
  inputQuestionInitState,
  inputQuestionReducer
} from "./components/ProjectForm/InputQuestion/inputQuestionReducer"
import {
  pdfGeneratorInitState,
  pdfGeneratorReducer
} from "./components/Pdf/PdfGenerator/pdfGeneratorReducer"

export const initState = {
  projectForm: projectFormInitState,
  inputQuestion: inputQuestionInitState,
  pdfGenerator: pdfGeneratorInitState
}

export const reducer = (state, action) => {
  const mutatedAction = {
    type: action?.type ?? action,
    value: action?.value ?? undefined
  }
  return {
    projectForm: projectFormReducer(state.projectForm, mutatedAction),
    inputQuestion: inputQuestionReducer(state.inputQuestion, mutatedAction),
    pdfGenerator: pdfGeneratorReducer(state.pdfGenerator, mutatedAction)
  }
}
