import * as React from "react"
import css from "./Headline.module.css"

export const Headline: React.FC = () => {
  const creations: string[] = [
    "APPLICATIONS",
    "SOLUTIONS",
    "DESIGNS",
    "EXPERIENCES",
  ]

  const [creation, setCreation] = React.useState(0)

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
      <div className={`${css.firstHeadline}`}>
        <h1 className={`${css.staticText}`}>Hi, I'm Grant</h1>
      </div>
      <div className={`${css.secondHeadline}`}>
        <h1 className={`${css.dynamicText}`}>I CREATE</h1>
        <span
          className={`${css.dynamicText}`}
        >{` ${creations[creation]}`}</span>
      </div>
      <div className={`${css.thirdHeadline}`}>
        <h1>Developer from Los Angeles, CA</h1>
      </div>
    </div>
  )
}
