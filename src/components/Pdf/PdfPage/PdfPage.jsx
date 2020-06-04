import React, { useRef, useEffect, useContext } from "react"
import { store } from "../../../store"
import "./PdfPage.scss"

const html2canvas =
  typeof window !== `undefined` ? require("html2canvas") : null

const pageSizes = {
  a4: { width: "210mm", height: "297mm" }
}

const getMargins = margins => ({
  paddingTop: `${margins?.top || 15}mm`,
  paddingRight: `${margins?.right || 15}mm`,
  paddingBottom: `${margins?.bottom || 15}mm`,
  paddingLeft: `${margins?.left || 15}mm`
})

const getPageSize = (size = "a4") => pageSizes?.[size]

const imagesToPreload = [
  "/images/brugmans-vloeren.png",
  "/images/total-project-service.png"
]

const PdfPage = ({ size, margins, children }) => {
  const pageRef = useRef()
  const {
    state: {
      pdfGenerator: { startGenerating, loadedImages }
    },
    dispatch
  } = useContext(store)

  useEffect(() => {
    const imagesPreloaded = loadedImages.length === imagesToPreload.length

    if (startGenerating && imagesPreloaded && pageRef?.current) {
      setTimeout(() => {
        html2canvas(pageRef.current, { scale: 1.5 }).then(canvas => {
          const imgData = canvas.toDataURL("image/png")
          dispatch({
            type: "pdfGenerator--addPageScreenShot",
            value: imgData
          })
        })
      }, 1000)
    }
  }, [startGenerating, loadedImages, imagesToPreload, dispatch, pageRef])

  return (
    <div
      ref={pageRef}
      className="PdfPage"
      style={{ ...getPageSize(size), ...getMargins(margins) }}
    >
      {children}
    </div>
  )
}

export default PdfPage
