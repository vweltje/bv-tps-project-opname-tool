import React, { useEffect, useContext } from "react"
import { store } from "../../store"
import "./PdfGenerator.scss"

const JsPDF = typeof window !== `undefined` ? require("jspdf") : null

const PdfGenerator = ({ children }) => {
  const {
    state: {
      pdfGenerator: { pageScreenShots }
    }
  } = useContext(store)

  useEffect(() => {
    if (pageScreenShots.length === children.length) {
      const pdf = new JsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
        floatPrecision: "smart"
      })

      let index = 0
      while (index < pageScreenShots.length) {
        if (index !== 0 && index !== pageScreenShots.length) {
          pdf.addPage()
        }
        console.log(pageScreenShots[index])
        pdf.addImage(pageScreenShots[index], "PNG", 0, 0, 210, 297)
        index += 1
      }

      // pdf.save(`test.pdf`, { returnPromise: true }).then(() => {
      //   console.log("done")
      // })
    }
  }, [children, pageScreenShots])

  return <div className="PdfGenerator">{children}</div>
}

export default PdfGenerator
