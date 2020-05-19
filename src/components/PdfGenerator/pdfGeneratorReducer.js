export const pdfGeneratorInitState = {
  pageScreenShots: []
}

export const pdfGeneratorReducer = (state, { type, value }) => {
  switch (type) {
    case "pdfGenerator--addPageScreenShot":
      return {
        ...state,
        pageScreenShots: [...state.pageScreenShots, value]
      }
    default:
      return state
  }
}
