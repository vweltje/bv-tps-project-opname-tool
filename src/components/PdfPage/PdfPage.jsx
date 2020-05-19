import React, { useRef, useEffect, useContext } from "react"
import html2canvas from "html2canvas"
import { store } from "../../store"
import "./PdfPage.scss"

const pageSizes = {
  a4: { width: "210mm", height: "297mm" }
}

const getMargins = margins => ({
  paddingTop: `${margins?.top || 25}mm`,
  paddingRight: `${margins?.right || 25}mm`,
  paddingBottom: `${margins?.bottom || 25}mm`,
  paddingLeft: `${margins?.left || 25}mm`
})

const getPageSize = (size = "a4") => pageSizes?.[size]

const PdfPage = ({ size, margins, children }) => {
  const pageRef = useRef()
  const { dispatch } = useContext(store)

  useEffect(() => {
    if (pageRef?.current) {
      dispatch("pdfGenerator--addPage")
      html2canvas(pageRef.current, { scale: 1 }).then(canvas => {
        const imgData = canvas.toDataURL("image/png")
        dispatch({ type: "pdfGenerator--addPageScreenShot", value: imgData })
      })
    }
  }, [dispatch, pageRef])

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
