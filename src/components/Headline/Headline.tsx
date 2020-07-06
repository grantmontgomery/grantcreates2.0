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

  const updateCreation = () => {
    setCreation(state => {
      return state < creations.length ? (state += 1) : 0
    })
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      return setCreation(state => {
        return state < creations.length ? (state += 1) : 0
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`${css.headlineWrapper}`}>
      <div className={`${css.mainHeadline}`}>
        <h1 className={`${css.staticText}`}>I CREATE</h1>
        <h1 className={`${css.dynamicText}`}>{creations[creation]}</h1>
      </div>
    </div>
  )
}
