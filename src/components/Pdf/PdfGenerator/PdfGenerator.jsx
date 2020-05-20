import React, { useEffect, useContext } from "react"
import { store } from "../../../store"
import "./PdfGenerator.scss"

const JsPDF = typeof window !== `undefined` ? require("jspdf") : null

const PdfGenerator = ({ children }) => {
  const {
    state: {
      pdfGenerator: { pageScreenShots }
    }
  } = useContext(store)

  useEffect(() => {
    if (children) {
      const pageCount = children?.length || 1
      if (pageScreenShots.length === pageCount) {
        console.log("start")
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
          pdf.addImage(pageScreenShots[index], "PNG", 0, 0, 210, 297)
          index += 1
        }

        pdf.save(`test.pdf`, { returnPromise: true }).then(() => {
          console.log("done")
        })
      }
    }
  }, [children, pageScreenShots])

  return <div className="PdfGenerator">{children}</div>
}

export default PdfGenerator
// style={{
//   position: "absolute",
//   top: 0,
//   zIndex: "-1",
//   height: 0,
//   width: 0,
//   overflow: "hidden",
//   display: "block",
//   minWidth: 0,
//   minHeight: 0,
//   right: "-100%"
// }}
