import React, { useRef, useState, useEffect, useContext } from "react"
import ProjectInfo from "./ProjectInfo/ProjectInfo"
import ProjectDetails from "./ProjectDetails/ProjectDetails"
import ProjectSubmit from "./ProjectSubmit/ProjectSubmit"
import Pdf from "../Pdf/Pdf"
import PdfGenerating from "./PdfGenerating/PdfGenerating"
import { store } from "../../store"
import "./ProjectForm.scss"

const ProjectForm = () => {
  const formRef = useRef()
  const [formHeight, setFormHeight] = useState(0)
  const {
    state: {
      pdfGenerator: { startGenerating }
    }
  } = useContext(store)

  useEffect(() => {
    if (formRef?.current?.clientHeight) {
      setFormHeight(formRef?.current?.clientHeight)
    }
  }, [formRef?.current?.clientHeight, setFormHeight])

  return (
    <div style={{ height: formHeight }}>
      {startGenerating ? (
        <>
          <Pdf />
          <PdfGenerating />
        </>
      ) : (
        <form ref={formRef} autoComplete="off" className="ProjectForm">
          <ProjectInfo />
          <ProjectDetails />
          <ProjectSubmit />
        </form>
      )}
    </div>
  )
}

export default ProjectForm
