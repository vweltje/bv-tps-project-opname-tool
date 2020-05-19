import React from "react"
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
  return (
    <div
      className="PdfPage"
      style={{ ...getPageSize(size), ...getMargins(margins) }}
    >
      {children}
    </div>
  )
}

export default PdfPage
