import React from "react"
import { StateProvider } from "../store"
import PdfGenerator from "../components/PdfGenerator/PdfGenerator"
import PdfPage from "../components/PdfPage/PdfPage"

const TestPdf = () => {
  return (
    <StateProvider>
      <PdfGenerator>
        <PdfPage margins={2}>
          <div
            style={{ backgroundColor: "tomato", padding: 50, width: "100%" }}
          >
            Page 1
          </div>
        </PdfPage>
        <PdfPage margins={2}>
          <div
            style={{ backgroundColor: "orange", padding: 50, width: "100%" }}
          >
            Page 2
          </div>
        </PdfPage>
      </PdfGenerator>
    </StateProvider>
  )
}

export default TestPdf
