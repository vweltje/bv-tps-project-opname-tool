import React, { useContext, useEffect, useState } from "react"
import { store } from "../../../store"
import "./Input.scss"

const Input = ({ className, storeSelector }) => {
  const [inputValue, setInputValue] = useState(false)
  const {
    state: {
      projectForm: { fields }
    },
    dispatch
  } = useContext(store)
  const { name, type, defaultValue, required } = fields?.[storeSelector]
  const validate = input => {
    setInputValue(input)
    dispatch({
      type: "projectForm--fieldUpdate",
      value: {
        field: storeSelector,
        value: input || ""
      }
    })
  }

  useEffect(() => {
    if (defaultValue && inputValue === false) {
      setInputValue(defaultValue)
      validate(defaultValue)
    }
  }, [inputValue, defaultValue])

  return (
    <input
      className={`Input${className ? ` ${className}` : ""}`}
      name={storeSelector}
      placeholder={name}
      type={type}
      value={inputValue || ""}
      onChange={e => validate(e?.currentTarget?.value || null)}
      required={required}
    />
  )
}

export default Input
