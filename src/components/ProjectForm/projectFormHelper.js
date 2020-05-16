export const getDateForInput = () => {
  const date = new Date()
  return `${date.getFullYear()}-${`0${date.getMonth()}`.slice(
    -2
  )}-${`0${date.getDate()}`.slice(-2)}`
}

export const getProjectNumber = () => Date.now()
