import React, { useContext } from "react"
import { store } from "../../../store"
import "./Input.scss"

const Input = ({ className, storeSelector }) => {
  const {
    state: {
      projectForm: { fields }
    },
    dispatch
  } = useContext(store)
  const { name, defaultValue, required } = fields?.[storeSelector]
  const onChange = e => {
    dispatch({
      type: "projectForm--fieldUpdate",
      value: {
        field: storeSelector,
        value: e?.currentTarget?.value
      }
    })
  }
  return (
    <input
      className={`Input${className ? ` ${className}` : ""}`}
      name={storeSelector}
      placeholder={name}
      type="text"
      value={defaultValue}
      onChange={e => onChange(e)}
      required={required}
    />
  )
}

export default Input
