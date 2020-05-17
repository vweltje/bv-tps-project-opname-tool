import React, { useRef, useState, useContext } from "react"
import { camelCase, capitalize, startCase } from "lodash"
import Container from "../../Container/Container"
import InputLabel from "../InputLabel/InputLabel"
import { store } from "../../../store"
import "./OptionsInput.scss"

const OptionsInput = ({ className, storeSelector }) => {
  const [selectRef] = useRef()
  const [selectedValue, setSelectedValue] = useState(false)
  const {
    state: {
      projectForm: { fields }
    }
  } = useContext(store)
  const { name, options, defaultValue, freeType, required } = fields?.[
    storeSelector
  ]

  return (
    <div className={`OptionsInput${className ? ` ${className}` : ""}`}>
      <Container>
        <InputLabel
          forInput={storeSelector}
          label={name}
          currentInputValue={capitalize(startCase(selectedValue))}
        />
        <select
          className="OptionsInput--select"
          ref={selectRef}
          name={storeSelector}
          id={storeSelector}
          required={required}
          defaultValue={defaultValue}
          onChange={e => setSelectedValue(e.currentTarget.value)}
        >
          <option value={defaultValue} disabled>
            {defaultValue}
          </option>
          {options.map(option => (
            <option key={camelCase(option)} value={camelCase(option)}>
              {option}
            </option>
          ))}
          {freeType && <option value={camelCase(freeType)}>{freeType}</option>}
        </select>
        {freeType && selectedValue === camelCase(freeType) && (
          <input
            ref={e => e?.focus()}
            className="OptionsInput--freeType"
            type="text"
            placeholder={`${freeType} namelijk`}
            onChange={console.log("ff")}
          />
        )}
      </Container>
    </div>
  )
}

export default OptionsInput
