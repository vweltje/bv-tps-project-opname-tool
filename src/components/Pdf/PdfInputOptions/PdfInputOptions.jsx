import React, { useContext } from "react"
import { camelCase } from "lodash"
import Checkbox from "../Checkbox/Checkbox"
import { store } from "../../../store"
import "./PdfInputOptions.scss"

const Option = ({ checked, label }) => (
  <div className="PdfInputOptions--option">
    <Checkbox checked={checked} />
    <div className="PdfInputOption--optionLabel">{label}</div>
  </div>
)

const PdfInputOptions = ({ storeSelector }) => {
  const {
    state: {
      projectForm: { fields }
    }
  } = useContext(store)
  const { name, options, freeType, value, freeTypeValue } = fields?.[
    storeSelector
  ]
  return (
    <div className="PdfInputOptions">
      <div>{name}</div>
      <div>
        {options &&
          options.map(option => (
            <Option
              key={camelCase(option)}
              checked={camelCase(option) === value}
              label={option}
            />
          ))}
        {freeType && (
          <Option
            checked={camelCase(freeType) === value}
            label={`${freeType}${freeTypeValue ? `: ${freeTypeValue}` : ""}`}
          />
        )}
      </div>
    </div>
  )
}

export default PdfInputOptions
