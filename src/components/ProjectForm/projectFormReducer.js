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
    },
    subfloorType: {
      name: "Type ondervloer",
      type: "options",
      options: [
        "Cement dekvloeren",
        "Anhydriet vloeren",
        "Monolithisch beton",
        "Houten ondervloeren"
      ],
      defaultValue: "Selecteed een ondervoer type",
      freeType: "Anders",
      required: true
    }
  }
}

export const projectFormReducer = (state, { type, value }) => {
  const mutatedState = state
  switch (type) {
    case "projectForm--fieldUpdate":
      mutatedState.fields[value.field] = {
        ...mutatedState.fields[value.field],
        value: value.value
      }
      return mutatedState
    case "projectForm--optionFieldUpdateValue":
      mutatedState.fields[value.field] = {
        ...mutatedState.fields[value.field],
        value: value.value
      }
      return mutatedState
    case "projectForm--optionFieldUpdateFreeTypeValue":
      mutatedState.fields[value.field] = {
        ...mutatedState.fields[value.field],
        freeTypeValue: value.freeTypeValue
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
