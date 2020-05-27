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
    phone: {
      name: "Telefoon",
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
    vloersysteem: {
      name: "Vloersysteem",
      type: "text",
      required: true
    },
    subfloorType: {
      name: "Type ondervloer",
      type: "options",
      options: [
        "Cementdekvloeren",
        "Anhydrietvloeren",
        "Monolithisch beton",
        "Houten ondervloeren"
      ],
      defaultValue: "Selecteer een ondervloer type",
      freeType: "Anders",
      required: true
    },
    windWaterProof: {
      name: "Wind & water dicht",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    restvochtOndergrond: {
      name: "Restvocht Ondergrond",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    omgevingsTemperatuur: {
      name: "Omgevings temperatuur",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    ondergrondTemperatuur: {
      name: "Ondergrond temperatuur",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    voldoendeVerlichting: {
      name: "Voldoende verlichting",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    ondervloerVrijVanLosseDelen: {
      name: "Ondervloer vrij van losse delen",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    vrijVanOpstakels: {
      name: "Vrij van obstakels",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    ruimtesLeeg: {
      name: "Ruimtes leeg",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    vloerBezemschoon: {
      name: "Vloer bezemschoon",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    geenBelemmeringenAndereOnderaannemers: {
      name: "Geen belemmeringen andere onderaannemers",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    straatwerkAanwezig: {
      name: "Straatwerk aanwezig",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    waterStroomStookAanwezig: {
      name: "Water/stroom/stook aanwezig",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    stookprotocolVloerverwarmingAfgerond: {
      name: "Stookprotocol vloerverwarming afgerond",
      type: "question",
      answers: ["Ja", "Nee", "Nvt"]
    },
    note: {
      name: "Opmerkingen",
      type: "textarea"
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
    case "projectForm--fieldInputQuestionAdditionalInputUpdate":
      mutatedState.fields[value.field] = {
        ...mutatedState.fields[value.field],
        additionalInput: value.additionalInput
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
