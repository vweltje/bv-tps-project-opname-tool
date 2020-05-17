import React, { useContext } from "react"
import OptionsInput from "../OptionsInput/OptionsInput"
import Input from "../Input/Input"

import { store } from "../../../store"

const InputSelector = ({ className, storeSelector }) => {
  const {
    state: {
      projectForm: { fields }
    }
  } = useContext(store)
  const { type } = fields?.[storeSelector]

  switch (type) {
    case "options":
      return (
        <OptionsInput className={className} storeSelector={storeSelector} />
      )
    default:
      return <Input className={className} storeSelector={storeSelector} />
  }
}

export default InputSelector
