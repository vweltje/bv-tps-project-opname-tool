import React from "react"
import "./Checkbox.scss"

const Checkbox = ({ checked }) => {
  return <div className={`Checkbox${checked ? " checked" : ""}`} />
}

export default Checkbox
