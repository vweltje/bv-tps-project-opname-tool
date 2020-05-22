import React, { useContext, useRef, useState, useEffect } from "react"
import { store } from "../../../store"
import "./ProjectSubmit.scss"

const ProjectSubmit = () => {
  const { dispatch } = useContext(store)
  const buttonRef = useRef()
  const [buttonHeight, setButtonHeight] = useState(0)

  useEffect(() => {
    if (buttonRef?.current?.clientHeight) {
      setButtonHeight(buttonRef?.current?.clientHeight)
    }
  }, [setButtonHeight, buttonRef])

  return (
    <>
      <div className="ProjectSubmit">
        <button
          ref={buttonRef}
          type="button"
          className="ProjectSubmit--button"
          onClick={() => {
            window.scrollTo(0, 0)
            dispatch({ type: "pdfGenerator--startGenerating", value: true })
          }}
        >
          Maak PDF
        </button>
      </div>
      <div className="ProjectSubmit--spacer" style={{ height: buttonHeight }} />
    </>
  )
}

export default ProjectSubmit
