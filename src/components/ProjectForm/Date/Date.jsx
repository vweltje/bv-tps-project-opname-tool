import React, { useContext } from "react"
// import { getValue } from "../projectFormHelper"
import { store } from "../../../store"
import "./Date.scss"

const Date = ({ className, storeSelector }) => {
  const {
    state: {
      projectForm: { fields }
    }
  } = useContext(store)
  const { defaultValue, required } = fields?.[storeSelector]
  const onChange = e => {
    console.log(e.currentTarget.value)
  }
  console.log(defaultValue)
  return (
    <input
      className={`Date${className ? ` ${className}` : ""}`}
      name={storeSelector}
      type="date"
      defaultValue={defaultValue}
      onChange={e => onChange(e)}
      required={required}
    />
  )
}

export default Date
