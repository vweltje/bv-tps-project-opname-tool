import React, { useContext } from "react"
import { store } from "../../../store"
import "./PdfInputTextarea.scss"

const PdfInputTextarea = ({ storeSelector }) => {
  const {
    state: {
      projectForm: { fields }
    }
  } = useContext(store)
  const { name, value } = fields[storeSelector]
  return (
    <div className="PdfInputTextarea">
      <h2 className="PdfInputTextarea--title">{name}</h2>
      <div className="PdfInputTextarea--value">{value}</div>
    </div>
  )
}

export default PdfInputTextarea
