import React, { useRef, useState, useContext, useEffect } from "react"
import { camelCase, capitalize, startCase } from "lodash"
import Container from "../../Container/Container"
import InputLabel from "../InputLabel/InputLabel"
import { store } from "../../../store"
import "./InputOptions.scss"

const InputOptions = ({ className, storeSelector }) => {
  const [selectRef] = useRef()
  const [selectedValue, setSelectedValue] = useState(false)
  const [freeTypeValue, setFreeTypeValue] = useState(false)
  const {
    state: {
      projectForm: { fields }
    },
    dispatch
  } = useContext(store)
  const { name, options, defaultValue, freeType, required } = fields?.[
    storeSelector
  ]

  useEffect(() => {
    if (selectedValue && selectedValue !== camelCase(freeType)) {
      dispatch({
        type: "projectForm--optionFieldUpdateFreeTypeValue",
        value: {
          field: storeSelector,
          freeTypeValue: false
        }
      })
    }
    dispatch({
      type: "projectForm--optionFieldUpdateValue",
      value: {
        field: storeSelector,
        value: selectedValue
      }
    })
  }, [selectedValue])

  useEffect(() => {
    if (freeType) {
      if (freeTypeValue && selectedValue === camelCase(freeType)) {
        dispatch({
          type: "projectForm--optionFieldUpdateFreeTypeValue",
          value: {
            field: storeSelector,
            freeTypeValue
          }
        })
      }
    }
  }, [freeTypeValue])

  return (
    <div className={`InputOptions${className ? ` ${className}` : ""}`}>
      <Container>
        <InputLabel
          forInput={storeSelector}
          label={name}
          currentInputValue={capitalize(startCase(selectedValue))}
        />
        <select
          className="InputOptions--select"
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
            className="InputOptions--freeType"
            type="text"
            placeholder={`${freeType} namelijk...`}
            required
            onChange={e => setFreeTypeValue(e.currentTarget.value)}
          />
        )}
      </Container>
    </div>
  )
}

export default InputOptions
