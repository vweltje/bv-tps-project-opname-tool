import React, { useContext } from "react"
import { store } from "../../../store"
import "./PdfHeading.scss"

const PdfHeading = () => {
  const { dispatch } = useContext(store)

  return (
    <div className="PdfHeading">
      <div>
        <div>
          <img
            src="/images/brugmans-vloeren.png"
            alt="brugmans-vloeren-logo"
            onLoad={() =>
              dispatch({
                type: "pdfGenerator--addImageLoaded",
                value: "/images/brugmans-vloeren.png"
              })
            }
          />
        </div>
      </div>
      <div>
        <div>
          <img
            src="/images/total-project-service.png"
            alt="total-project-service-logo"
            onLoad={() =>
              dispatch({
                type: "pdfGenerator--addImageLoaded",
                value: "/images/total-project-service.png"
              })
            }
          />
        </div>
      </div>
    </div>
  )
}

export default PdfHeading
