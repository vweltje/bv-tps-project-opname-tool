import React from "react"
import "./InputLabel.scss"

const InputLabel = ({ forInput, label, currentInputValue }) => {
  return (
    <label htmlFor={forInput} className="InputLabel">
      <span className="InputLabel--label">{label}</span>
      {currentInputValue && currentInputValue !== "False" && (
        <span className="InputLabel--currentInputValue">
          {currentInputValue}
        </span>
      )}
    </label>
  )
}

export default InputLabel
