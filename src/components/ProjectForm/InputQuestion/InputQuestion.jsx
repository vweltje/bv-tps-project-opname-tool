import React, { useState, useContext, useEffect } from "react"
import { capitalize, startCase } from "lodash"
import Container from "../../Container/Container"
import InputLabel from "../InputLabel/InputLabel"
import { store } from "../../../store"
import "./InputQuestion.scss"

const InputQuestion = ({ className, storeSelector }) => {
  const {
    state: {
      inputQuestion: { activeQuestion }
    }
  } = useContext(store)
  const [selectedValue, setSelectedValue] = useState(false)
  const [inputValue, setInputValue] = useState(false)
  const {
    state: {
      projectForm: { fields }
    },
    dispatch
  } = useContext(store)
  const { name, answers } = fields[storeSelector]

  useEffect(() => {
    dispatch({
      type: "projectForm--fieldUpdate",
      value: {
        field: storeSelector,
        value: selectedValue
      }
    })
  }, [selectedValue, dispatch])

  useEffect(() => {
    dispatch({
      type: "projectForm--fieldInputQuestionAdditionalInputUpdate",
      value: {
        field: storeSelector,
        additionalInput: inputValue
      }
    })
  }, [inputValue, dispatch])

  function updateActiveQuestion() {
    dispatch({ type: "InputQuestion--setCurrentEditing", value: storeSelector })
  }

  function editing() {
    return activeQuestion === storeSelector
  }

  return (
    <div
      className={`InputOptions${className ? ` ${className}` : ""}${
        editing() ? ` editing` : ""
      }`}
    >
      <Container>
        <button
          onClick={updateActiveQuestion}
          type="button"
          className="InputOptions--InputLableButtonWrapper"
        >
          <InputLabel label={name} currentInputValue={selectedValue} />
          {!editing() && inputValue && (
            <span className="InputQuestion--inputValue">{inputValue}</span>
          )}
        </button>
        {editing() && (
          <>
            <div className="InputQuestion--buttons">
              {answers.map(answer => (
                <button
                  type="button"
                  className={`InputQuestion--button${
                    selectedValue === capitalize(startCase(answer))
                      ? " selected"
                      : ""
                  }`}
                  key={answer}
                  onClick={() =>
                    setSelectedValue(capitalize(startCase(answer)))
                  }
                >
                  {answer}
                </button>
              ))}
            </div>
            <input
              className="InputQuestion--input"
              placeholder="Beschrijving (optioneel)"
              type="text"
              value={inputValue || ""}
              onChange={e => setInputValue(e?.currentTarget?.value)}
            />
          </>
        )}
      </Container>
    </div>
  )
}

export default InputQuestion
