export const pdfGeneratorInitState = {
  pageScreenShots: [],
  startGenerating: false,
  loadedImages: []
}

export const pdfGeneratorReducer = (state, { type, value }) => {
  switch (type) {
    case "pdfGenerator--addPageScreenShot":
      return {
        ...state,
        pageScreenShots: [...state.pageScreenShots, value]
      }
    case "pdfGenerator--resetPageScreenShot":
      return {
        ...state,
        pageScreenShots: pdfGeneratorInitState.pageScreenShots
      }
    case "pdfGenerator--startGenerating":
      return {
        ...state,
        startGenerating: value
      }
    case "pdfGenerator--addImageLoaded":
      return {
        ...state,
        loadedImages: [...state.loadedImages, value]
      }
    default:
      return state
  }
}
