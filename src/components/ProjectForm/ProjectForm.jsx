import React from "react"
import ProjectInfo from "./ProjectInfo/ProjectInfo"
import ProjectDetails from "./ProjectDetails/ProjectDetails"
import ProjectSubmit from "./ProjectSubmit/ProjectSubmit"

const ProjectForm = () => {
  return (
    <form autoComplete="off">
      <ProjectInfo />
      <ProjectDetails />
      <ProjectSubmit />
    </form>
  )
}

export default ProjectForm
