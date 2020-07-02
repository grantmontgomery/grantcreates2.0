import * as React from "react"
import { Typical } from "react-typical"
import css from "./Headline.module.css"

// const type = (creations: string[]) => {
//   let count = 0
//   let index = 0
//   let currentText = ""
//   let letter = ""

//   if (count === creations.length) {
//     count = 0
//   }

//   currentText = creations[count]
//   letter = currentText.slice(0, ++index)
//   document.querySelector(`.${css.dynamicText}`).textContent = letter
//   if (letter.length === currentText.length) {
//     count++
//     index = 0
//   }
//   setTimeout(() => {
//     type(creations)
//   }, 400)
// }

export const Headline = () => {
  const creations: string[] = [
    "APPLICATIONS",
    "WEBSITES",
    "DESIGNS",
    "SOLUTIONS",
  ]

  //   React.useEffect(() => type(creations), [])

  return (
    <div className={`${css.headlineWrapper}`}>
      <div className={`${css.mainHeadline}`}>
        <h1 className={`${css.staticText}`}>
          I CREATE{" "}
          {/* <Typical
            loop={Infinity}
            steps={[
              "APPLICATIONS",
              1000,
              "WEBSITES",
              1000,
              "DESIGNS",
              1000,
              "SOLUTIONS",
              1000,
            ]}
          ></Typical> */}
        </h1>
      </div>
    </div>
  )
}
