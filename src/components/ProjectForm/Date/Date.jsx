import React, { useContext } from "react"
import { store } from "../../../store"
import "./Date.scss"

const Date = ({ className, storeSelector }) => {
  const {
    state: {
      projectForm: { fields }
    },
    dispatch
  } = useContext(store)
  const { defaultValue, required } = fields?.[storeSelector]
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
      className={`Date${className ? ` ${className}` : ""}`}
      name={storeSelector}
      type="date"
      value={defaultValue}
      onChange={e => onChange(e)}
      required={required}
    />
  )
}

export default Date
