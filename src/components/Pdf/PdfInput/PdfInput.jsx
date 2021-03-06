import React, { useContext } from "react"
import { store } from "../../../store"
import "./PdfInput.scss"

const PdfInput = ({ storeSelector, splitEven }) => {
  const {
    state: {
      projectForm: { fields }
    }
  } = useContext(store)
  const { name, value } = fields?.[storeSelector]
  return (
    <div className={`PdfInput${splitEven ? " splitEven" : ""}`}>
      <div className="PdfInput--label">{name}</div>
      <div className="PdfInput--value">{value}</div>
    </div>
  )
}

export default PdfInput
