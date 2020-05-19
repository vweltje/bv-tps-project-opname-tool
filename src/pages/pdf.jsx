import React from "react"
import PdfGenerator from "../components/PdfGenerator/PdfGenerator"
import PdfPage from "../components/PdfPage/PdfPage"

const TestPdf = () => {
  return (
    <PdfGenerator>
      <PdfPage margins={2}>
        <div style={{ backgroundColor: "tomato", padding: 50, width: "100%" }}>
          Page 1
        </div>
      </PdfPage>
      <PdfPage margins={2}>
        <div style={{ backgroundColor: "orange", padding: 50, width: "100%" }}>
          Page 2
        </div>
      </PdfPage>
    </PdfGenerator>
  )
}

export default TestPdf
