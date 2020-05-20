import React, { useContext } from "react"
import { store } from "../../../store"
import "./ProjectSubmit.scss"

const ProjectSubmit = () => {
  const { dispatch } = useContext(store)
  return (
    <>
      <div className="ProjectSubmit">
        <button
          type="button"
          className="ProjectSubmit--button"
          onClick={() => dispatch("pdfGenerator--startGenerating")}
        >
          Maak PDF
        </button>
      </div>
    </>
  )
}

export default ProjectSubmit
