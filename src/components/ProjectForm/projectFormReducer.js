import { getProjectNumber, getDateForInput } from "./projectFormHelper"

export const projectFormInitState = {
  fields: {
    projectName: {
      name: "Project",
      type: "text",
      value: false,
      required: true
    },
    projectNummber: {
      name: "Projectnummer",
      type: "number",
      value: false,
      defaultValue: getProjectNumber(),
      required: true
    },
    contactPerson: {
      name: "Contactpersoon",
      type: "text",
      value: false,
      required: true
    },
    adress: {
      name: "Adres",
      type: "text",
      value: false,
      required: true
    },
    projectOwner: {
      name: "Opnemer (naam)",
      type: "text",
      value: false,
      required: true
    },
    date: {
      name: "Datum",
      type: "date",
      value: false,
      defaultValue: getDateForInput(),
      required: true
    }
  }
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
