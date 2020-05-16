import { getProjectNumber, getDateForInput } from "./projectFormHelper"

export const projectFormInitState = {
  fields: {
    projectName: {
      name: "Project",
      type: "text",
      required: true
    },
    projectNummber: {
      name: "Projectnummer",
      type: "number",
      defaultValue: getProjectNumber(),
      required: true
    },
    contactPerson: {
      name: "Contactpersoon",
      type: "text",
      required: true
    },
    adress: {
      name: "Adres",
      type: "text",
      required: true
    },
    projectOwner: {
      name: "Opnemer (naam)",
      type: "text",
      required: true
    },
    date: {
      name: "Datum",
      type: "date",
      defaultValue: getDateForInput(),
      required: true
    }
  }
}

export const projectFormReducer = (state, { type, value }) => {
  switch (type) {
    case "projectForm--fieldUpdate":
      const mutatedState = state
      mutatedState.fields[value.field] = {
        ...mutatedState.fields[value.field],
        value: value.value
      }
      return mutatedState
    case "projectForm--deactivate":
      return {
        ...state,
        active: false
      }
    default:
      return state
  }
}
