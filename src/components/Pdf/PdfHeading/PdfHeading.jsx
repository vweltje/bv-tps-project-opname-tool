import React from "react"
import "./PdfHeading.scss"
import brugmansVloerenPng from "./brugmansVloeren"
import totalProjectServicePng from "./totalProjectService"

const PdfHeading = () => {
  return (
    <div className="PdfHeading">
      <div>
        <div>
          <img src={brugmansVloerenPng} alt="brugmans-vloeren-logo" />
        </div>
      </div>
      <div>
        <div>
          <img src={totalProjectServicePng} alt="total-project-service-logo" />
        </div>
      </div>
    </div>
  )
}

export default PdfHeading
