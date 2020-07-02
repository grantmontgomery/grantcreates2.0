import * as React from "react"
import { Typical } from "react-typical"
import css from "./Headline.module.css"

export const Headline = () => {
  const creations: string[] = [
    "APPLICATIONS",
    "WEBSITES",
    "DESIGNS",
    "SOLUTIONS",
  ]

  const [creation, setCreation] = React.useState(0)

  // const creationInterval = () => {
  //   if (creation < creations.length) {
  //     setCreation(state => state++)
  //   } else {
  //     setCreation(0)
  //   }
  // }

  // setInterval(() => creationInterval(), 2000)
  return (
    <div className={`${css.headlineWrapper}`}>
      <div className={`${css.mainHeadline}`}>
        <h1 className={`${css.staticText}`}>I CREATE</h1>
        <h1 className={`${css.dynamicText}`}>{creations[creation]}</h1>
      </div>
    </div>
  )
}
