import React, { useContext } from "react"
import Checkbox from "../Checkbox/Checkbox"
import { store } from "../../../store"
import "./PdfInputQuestion.scss"

const PdfInputQuestion = ({ storeSelector, insertTitle = false }) => {
  const {
    state: {
      projectForm: { fields }
    }
  } = useContext(store)
  const { name, value, additionalInput } = fields[storeSelector]
  return (
    <>
      {insertTitle && (
        <div className="PdfInputQuestion">
          <div className="PdfInputQuestion--name" />
          <div className="PdfInputQuestion--checkboxes title">
            <span>Ja</span>
            <span margin-left="1px">Nee</span>
            <span>NVT</span>
          </div>
          <div className="PdfInputQuestion--comment" />
        </div>
      )}
      <div className="PdfInputQuestion">
        <div className="PdfInputQuestion--name">{name}</div>
        <div className="PdfInputQuestion--checkboxes">
          <Checkbox checked={value === "ja"} />
          <Checkbox checked={value === "nee"} />
          <Checkbox checked={value === "nvt"} />
        </div>
        <div className="PdfInputQuestion--comment">{additionalInput}</div>
      </div>
    </>
  )
}

export default PdfInputQuestion
