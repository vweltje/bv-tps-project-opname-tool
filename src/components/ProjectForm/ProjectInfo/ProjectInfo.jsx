import React from "react"
import Container from "../../Container/Container"
import ProjectInfoGroup from "./ProjectInfoGroup/ProjectInfoGroup"
import InputSelector from "../InputSelector/InputSelector"
import "./ProjectInfo.scss"

const ProjectInfo = () => {
  return (
    <div className="ProjectInfo">
      <Container>
        <ProjectInfoGroup>
          <InputSelector
            className="ProjectInfo--title"
            storeSelector="projectName"
          />
          <InputSelector
            className="ProjectInfo--projectNummber"
            storeSelector="projectNummber"
          />
        </ProjectInfoGroup>
        <ProjectInfoGroup>
          <InputSelector storeSelector="contactPerson" />
          <InputSelector storeSelector="phone" />
          <InputSelector storeSelector="adress" />
        </ProjectInfoGroup>
        <ProjectInfoGroup>
          <InputSelector storeSelector="projectOwner" />
          <InputSelector storeSelector="date" />
        </ProjectInfoGroup>
      </Container>
    </div>
  )
}

export default ProjectInfo
