import React, { useContext } from "react"
import { getValue } from "../projectFormHelper"
import { store } from "../../../store"
import "./Input.scss"

const Input = ({ className, storeSelector }) => {
  const {
    state: {
      projectForm: { fields }
    }
  } = useContext(store)
  const { name, type, value, defaultValue, required } = fields?.[storeSelector]
  const onChange = e => {
    console.log(e)
  }
  return (
    <input
      className={`Input${className ? ` ${className}` : ""}`}
      name={storeSelector}
      placeholder={name}
      type={type}
      value={getValue({ value, defaultValue })}
      onChange={e => onChange(e)}
      required={required}
    />
  )
}

export default Input
