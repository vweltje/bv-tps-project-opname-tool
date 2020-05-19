export const pdfGeneratorInitState = {
  pagesToCreate: 0,
  pageScreenShots: []
}

export const pdfGeneratorReducer = (state, { type, value }) => {
  switch (type) {
    case "pdfGenerator--addPage":
      return {
        ...state,
        pagesToCreate: state.pagesToCreate + 1
      }
    case "pdfGenerator--addPageScreenShot":
      return {
        ...state,
        pageScreenShots: [...state.pageScreenShots, value]
      }
    default:
      return state
  }
}
