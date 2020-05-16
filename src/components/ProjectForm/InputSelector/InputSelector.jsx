import React, { useContext } from "react"
import Input from "../Input/Input"
import Date from "../Date/Date"
import { store } from "../../../store"

const InputSelector = ({ className, storeSelector }) => {
  const {
    state: {
      projectForm: { fields }
    }
  } = useContext(store)
  const { type } = fields?.[storeSelector]

  switch (type) {
    case "date":
      return <Date className={className} storeSelector={storeSelector} />
    default:
      return <Input className={className} storeSelector={storeSelector} />
  }
}

export default InputSelector
