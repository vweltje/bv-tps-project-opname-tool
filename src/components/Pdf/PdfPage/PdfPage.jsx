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

const PdfPage = ({ size, margins, children }) => {
  const pageRef = useRef()
  const { dispatch } = useContext(store)

  useEffect(() => {
    if (pageRef?.current && false) {
      html2canvas(pageRef.current, { scale: 2 }).then(canvas => {
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
