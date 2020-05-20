import React, { useContext } from "react"
import ProjectInfo from "./ProjectInfo/ProjectInfo"
import ProjectDetails from "./ProjectDetails/ProjectDetails"
import ProjectSubmit from "./ProjectSubmit/ProjectSubmit"
import Pdf from "../Pdf/Pdf"
import { store } from "../../store"
import "./ProjectForm.scss"

const ProjectForm = () => {
  const {
    state: {
      pdfGenerator: { startGenerating }
    }
  } = useContext(store)
  console.log(startGenerating)
  return (
    <>
      <form autoComplete="off" className="ProjectForm">
        <ProjectInfo />
        <ProjectDetails />
        <ProjectSubmit />
      </form>
      <Pdf />
    </>
  )
}

export default ProjectForm
