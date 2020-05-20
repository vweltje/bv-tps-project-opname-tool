import React, { useContext } from "react"
import { store } from "../../../store"
import "./PdfInput.scss"

const PdfInput = ({ storeSelector }) => {
  const {
    state: {
      projectForm: { fields }
    }
  } = useContext(store)
  const { name, value } = fields?.[storeSelector]
  return (
    <div className="PdfInput">
      <div className="PdfInput--label">{name}</div>
      <div className="PdfInput--value">wergewr{value}</div>
    </div>
  )
}

export default PdfInput
