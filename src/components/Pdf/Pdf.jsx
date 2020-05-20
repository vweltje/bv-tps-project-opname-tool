import React from "react"
import PdfGenerator from "./PdfGenerator/PdfGenerator"
import PdfPage from "./PdfPage/PdfPage"
import PdfHeading from "./PdfHeading/PdfHeading"
import PdfProjectInfo from "./PdfProjectInfo/PdfProjectInfo"
import PdfHorizontalRuler from "./PdfHorizontalRuler/PdfHorizontalRuler"
import PdfInputOptions from "./PdfInputOptions/PdfInputOptions"

const Pdf = () => {
  return (
    <PdfGenerator>
      <PdfPage margins={{ top: 10, bottom: 10 }}>
        <PdfHeading />
        <PdfProjectInfo />
        <PdfHorizontalRuler />
        <h2 style={{ fontSize: "4mm" }}>Voorbereiding</h2>
        <PdfInputOptions storeSelector="subfloorType" />
      </PdfPage>
      <PdfPage margins={{ top: 10, bottom: 10 }}>
        <div style={{ backgroundColor: "orange", padding: 50, width: "100%" }}>
          Page 2
        </div>
      </PdfPage>
    </PdfGenerator>
  )
}

export default Pdf
