import React from "react"
import "./ProjectSubmit.scss"

const ProjectSubmit = () => {
  const generatePdf = () => {}
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
