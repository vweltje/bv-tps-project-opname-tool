import React, { useContext } from "react"
import { store } from "../../../store"
import "./PdfHeading.scss"

const PdfHeading = () => {
  const {
    state: {
      pdfGenerator: { loadedImages }
    },
    dispatch
  } = useContext(store)

  const dispatchWhenComplete = (image, src) => {
    if (!image) return
    if (image.complete) {
      if (!loadedImages.includes("/images/brugmans-vloeren.png")) {
        dispatch({
          type: "pdfGenerator--addImageLoaded",
          value: src
        })
      }
    }
  }

  return (
    <div className="PdfHeading">
      <div>
        <div>
          <img
            src="/images/brugmans-vloeren.png"
            alt="brugmans-vloeren-logo"
            ref={image =>
              dispatchWhenComplete(image, "/images/brugmans-vloeren.png")
            }
          />
        </div>
      </div>
      <div>
        <div>
          <img
            src="/images/total-project-service.png"
            alt="total-project-service-logo"
            ref={image =>
              dispatchWhenComplete(image, "/images/total-project-service.png")
            }
          />
        </div>
      </div>
    </div>
  )
}

export default PdfHeading
