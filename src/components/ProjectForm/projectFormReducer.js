export const projectFormInitState = {
  active: false
}

export const projectFormReducer = (state, action) => {
  switch (action.type) {
    case "projectForm--activate":
      return {
        ...state,
        active: true
      }
    case "projectForm--deactivate":
      return {
        ...state,
        active: false
      }
    default:
      return state
  }
}
