import React, { useRef, useEffect } from "react"
// import html2canvas from "html2canvas"
// import jsPDF from "jspdf"
import "./PdfGenerator.scss"

// const pxToMm = (ref, px) => {
//   return Math.floor(px / ref?.current?.offsetHeight)
// }

const PdfGenerator = ({ children }) => {
  const pxToMmRef = useRef()

  useEffect(() => {
    // const input = contentRef?.current
    // const inputHeightMm = pxToMm(pxToMmRef, input.offsetHeight)
    // const inputWidthMm = pxToMm(pxToMmRef, input.offsetWidth)
    // const a4WidthMm = 210
    // const a4HeightMm = 297
    // const scaleValue = a4WidthMm / inputWidthMm
    // const width = Math.floor(inputWidthMm * scaleValue)
    // const height = Math.floor(inputHeightMm * scaleValue)
    //
    // html2canvas(input, { scale: 1 }).then(canvas => {
    //   const imgData = canvas.toDataURL("image/png")
    //   const options = {
    //     orientation: "p",
    //     unit: "mm",
    //     format: "a4",
    //     putOnlyUsedFonts: true,
    //     floatPrecision: "smart"
    //   }
    //   const pdf = new jsPDF(options) // eslint-disable-line new-cap
    //   const pages = Math.ceil(height / a4HeightMm)
    //   let currentPage = 0
    //
    //   while (currentPage <= pages) {
    //     if (currentPage !== 0 && currentPage !== pages) pdf.addPage()
    //     pdf.addImage(
    //       imgData,
    //       "PNG",
    //       0,
    //       -Math.abs(a4HeightMm * currentPage),
    //       width,
    //       height
    //     )
    //     currentPage += 1
    //   }
    //
    //   pdf.save(`test.pdf`, { returnPromise: true }).then(() => {
    //     console.log("PDF generated")
    //   })
    // })

    children.map(child => console.log(child))
  })

  return (
    <>
      <div ref={pxToMmRef} style={{ position: "absolute", height: "1mm" }} />
      <div className="PdfGenerator">{children}</div>
    </>
  )
}

export default PdfGenerator
