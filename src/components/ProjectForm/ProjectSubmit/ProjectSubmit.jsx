import React from "react"
import "./ProjectSubmit.scss"

const PdfConverter = require("jspdf")

const ProjectSubmit = () => {
  const generatePdf = () => {
    // var converter = new pdfConverter();
    // var doc = converter.jsPDF('p', 'pt');

    const doc = new PdfConverter("p", "pt", "c6")

    doc.setFontSize(22)
    doc.text(20, 50, "Park Entry Ticket")
    doc.setFontSize(16)
    doc.text(20, 80, `Address1: De hurken 1`)
    doc.text(20, 100, `Address2: De hurken 2`)
    doc.text(20, 120, `Entry Date & time: 20-12-2020`)
    doc.text(20, 140, `Expiry date & time: 10-04-2019`)
    doc.save("test.pdf")
  }
  return (
    <div className="ProjectSubmit">
      <button
        type="button"
        className="ProjectSubmit--button"
        onClick={generatePdf}
      >
        Maak PDF
      </button>
    </div>
  )
}

export default ProjectSubmit
