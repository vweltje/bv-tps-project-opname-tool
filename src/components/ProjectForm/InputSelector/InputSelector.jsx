import React, { useContext } from "react"
import InputTextarea from "../InputTextarea/InputTextarea"
import OptionsInput from "../OptionsInput/OptionsInput"
import Input from "../Input/Input"

import { store } from "../../../store"

const InputSelector = ({ className, storeSelector }) => {
  const {
    state: {
      projectForm: { fields }
    }
  } = useContext(store)
  const { type } = fields[storeSelector]
  let InputField = Input

  if (type === "textarea") InputField = InputTextarea
  if (type === "options") InputField = OptionsInput

  return <InputField className={className} storeSelector={storeSelector} />
}

export default InputSelector
