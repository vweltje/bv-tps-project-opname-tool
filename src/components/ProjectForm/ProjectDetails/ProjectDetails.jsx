import React from "react"
import InputSelector from "../InputSelector/InputSelector"
import "./ProjectDetails.scss"

const ProjectDetails = () => {
  return (
    <div className="ProjectDetails">
      <InputSelector storeSelector="subfloorType" />
      <InputSelector storeSelector="note" />
    </div>
  )
}

export default ProjectDetails
