import React from "react"
import "./ProjectSubmit.scss"

const ProjectSubmit = () => {
  const generatePdf = () => {
    console.log("TODO: Generate PDF")
  }
  return (
    <div className="ProjectSubmit">
      <button
        type="button"
        className="ProjectSubmit--button"
        onClick={generatePdf}
      >
        Maak PDF
      </button>
    </div>
  )
}

export default ProjectSubmit
