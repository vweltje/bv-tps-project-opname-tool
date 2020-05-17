import React from "react"
import InputSelector from "../InputSelector/InputSelector"
import "./ProjectDetails.scss"

const ProjectDetails = () => {
  return (
    <div className="ProjectDetails">
      <InputSelector storeSelector="subfloorType" />
      <InputSelector storeSelector="windWaterProof" />
      <InputSelector storeSelector="restvochtOndergrond" />
      <InputSelector storeSelector="omgevingsTemperatuur" />
      <InputSelector storeSelector="ondergrondTemperatuur" />
      <InputSelector storeSelector="voldoendeVerlichting" />
      <InputSelector storeSelector="ondervloerVrijVanLosseDelen" />
      <InputSelector storeSelector="vrijVanOpstakels" />
      <InputSelector storeSelector="ruimtesLeeg" />
      <InputSelector storeSelector="vloerBezemschoon" />
      <InputSelector storeSelector="geenBelemmeringenAndereOnderaannemers" />
      <InputSelector storeSelector="straatwerkAanwezig" />
      <InputSelector storeSelector="waterStroomStookAanwezig" />
      <InputSelector storeSelector="stookprotocolVloerverwarmingAfgerond" />
      <InputSelector storeSelector="note" />
    </div>
  )
}

export default ProjectDetails
