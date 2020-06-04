import React from "react"
// import React, { useContext } from "react"
// import { store } from "../../../store"
import "./PdfHeading.scss"
import brugmansVloerenPng from "./brugmansVloeren"
import totalProjectServicePng from "./totalProjectService"

const PdfHeading = () => {
  // const {
  //   state: {
  //     pdfGenerator: { loadedImages }
  //   },
  //   dispatch
  // } = useContext(store)

  // const dispatchWhenComplete = (image, src) => {
  //   if (!image) return
  //   if (image.complete) {
  //     if (!loadedImages.includes("/images/brugmans-vloeren.png")) {
  //       dispatch({
  //         type: "pdfGenerator--addImageLoaded",
  //         value: src
  //       })
  //     }
  //   }
  // }

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

// src="/images/brugmans-vloeren.png"
// ref={image =>
//   dispatchWhenComplete(image, "/images/brugmans-vloeren.png")
// }

// src="/images/total-project-service.png"
// ref={image =>
//   dispatchWhenComplete(image, "/images/total-project-service.png")
// }
