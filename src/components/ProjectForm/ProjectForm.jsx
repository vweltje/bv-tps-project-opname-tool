import React from "react"
import ProjectInfo from "./ProjectInfo/ProjectInfo"
import ProjectDetails from "./ProjectDetails/ProjectDetails"
import ProjectSubmit from "./ProjectSubmit/ProjectSubmit"
import "./ProjectForm.scss"

const ProjectForm = () => {
  return (
    <form autoComplete="off" className="ProjectForm">
      <ProjectInfo />
      <ProjectDetails />
      <ProjectSubmit />
    </form>
  )
}

export default ProjectForm
