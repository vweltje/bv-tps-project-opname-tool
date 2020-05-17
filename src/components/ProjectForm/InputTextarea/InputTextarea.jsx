import React, { useRef, useState, useContext, useEffect } from "react"
import Container from "../../Container/Container"
import { store } from "../../../store"
import "./InputTextarea.scss"

const InputTextarea = ({ className, storeSelector }) => {
  const textareaRef = useRef()
  const [textareaValue, setTextareaValue] = useState()
  const {
    state: {
      projectForm: { fields }
    },
    dispatch
  } = useContext(store)
  const { name } = fields[storeSelector]

  function updateHeight(e) {
    textareaRef.current.style.height = "33px"
    textareaRef.current.style.height = `${e.target.scrollHeight}px`
  }

  useEffect(() => {
    dispatch({
      type: "projectForm--fieldUpdate",
      value: {
        field: storeSelector,
        value: textareaValue
      }
    })
  }, [textareaValue])

  return (
    <div className={`InputTextarea${className ? ` ${className}` : ""}`}>
      <Container>
        <textarea
          className="InputTextarea--textarea"
          ref={textareaRef}
          name={storeSelector}
          placeholder={name}
          onChange={e => {
            updateHeight(e)
            setTextareaValue(e.currentTarget.value)
          }}
        />
      </Container>
    </div>
  )
}
export default InputTextarea
