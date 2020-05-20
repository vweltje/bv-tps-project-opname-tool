import React from "react"
import PdfGenerator from "./PdfGenerator/PdfGenerator"
import PdfPage from "./PdfPage/PdfPage"
import PdfHeading from "./PdfHeading/PdfHeading"
import PdfProjectInfo from "./PdfProjectInfo/PdfProjectInfo"
import PdfHorizontalRuler from "./PdfHorizontalRuler/PdfHorizontalRuler"
import PdfInputOptions from "./PdfInputOptions/PdfInputOptions"
import PdfInputQuestion from "./PdfInputQuestion/PdfInputQuestion"

const Pdf = () => {
  return (
    <PdfGenerator>
      <PdfPage margins={{ top: 10, bottom: 10 }}>
        <PdfHeading />
        <PdfProjectInfo />
        <PdfHorizontalRuler />
        <h2 style={{ fontSize: "4mm" }}>Voorbereiding</h2>
        <PdfInputOptions storeSelector="subfloorType" />
        <PdfInputQuestion storeSelector="windWaterProof" insertTitle />
        <PdfInputQuestion storeSelector="restvochtOndergrond" />
        <PdfInputQuestion storeSelector="omgevingsTemperatuur" />
        <PdfInputQuestion storeSelector="ondergrondTemperatuur" />
        <PdfInputQuestion storeSelector="voldoendeVerlichting" />
        <PdfInputQuestion storeSelector="ondervloerVrijVanLosseDelen" />
        <PdfInputQuestion storeSelector="vrijVanOpstakels" />
        <PdfInputQuestion storeSelector="ruimtesLeeg" />
        <PdfInputQuestion storeSelector="vloerBezemschoon" />
        <PdfInputQuestion storeSelector="geenBelemmeringenAndereOnderaannemers" />
        <PdfInputQuestion storeSelector="straatwerkAanwezig" />
        <PdfInputQuestion storeSelector="waterStroomStookAanwezig" />
        <PdfInputQuestion storeSelector="stookprotocolVloerverwarmingAfgerond" />
      </PdfPage>
    </PdfGenerator>
  )
}

export default Pdf
