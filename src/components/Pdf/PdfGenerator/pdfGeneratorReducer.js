export const pdfGeneratorInitState = {
  pageScreenShots: [],
  startGenerating: false
}

export const pdfGeneratorReducer = (state, { type, value }) => {
  switch (type) {
    case "pdfGenerator--addPageScreenShot":
      return {
        ...state,
        pageScreenShots: [...state.pageScreenShots, value]
      }
    case "pdfGenerator--startGenerating":
      console.log("startGenerating")
      return {
        ...state,
        startGenerating: true
      }
    default:
      return state
  }
}
