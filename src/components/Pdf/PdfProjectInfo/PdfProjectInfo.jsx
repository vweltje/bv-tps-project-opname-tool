import React from "react"
import PdfInput from "../PdfInput/PdfInput"
import "./PdfProjectInfo.scss"

const PdfProjectInfo = () => {
  return (
    <div className="PdfProjectInfo">
      <h1 className="PdfProjectInfo--heading">Project opname formulier</h1>
      <div className="PdfProjectInfo--infoBlock">
        <div>
          <PdfInput storeSelector="projectName" />
          <PdfInput storeSelector="contactPerson" />
          <PdfInput storeSelector="adress" />
          <PdfInput storeSelector="projectName" />
        </div>
        <div>
          <PdfInput storeSelector="projectNummber" />
          <PdfInput storeSelector="phone" />
          <PdfInput storeSelector="date" />
        </div>
      </div>
    </div>
  )
}

export default PdfProjectInfo
