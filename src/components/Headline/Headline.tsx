import * as React from "react"
import css from "./Headline.module.css"

const type = (creations: string[]) => {
  let count = 0
  let index = 0
  let currentText = ""
  let letter = ""

  if (count === creations.length) {
    count = 0
  }

  currentText = creations[count]
  letter = currentText.slice(0, ++index)
  document.querySelector(`.${css.dynamicText}`).textContent = letter
  if (letter.length === currentText.length) {
    count++
    index = 0
  }
  setTimeout(() => {
    type(creations)
  }, 400)
}

export const Headline = () => {
  const creations: string[] = [
    "APPLICATIONS",
    "WEBSITES",
    "DESIGNS",
    "SOLUTIONS",
  ]

  React.useEffect(() => type(creations), [])

  return (
    <div className={`${css.headlineWrapper}`}>
      <div className={`${css.mainHeadline}`}>
        <h1 className={`${css.staticText}`}>I CREATE</h1>
        <h1 className={`${css.dynamicText}`}></h1>
      </div>
    </div>
  )
}
