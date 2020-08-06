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
    <div className={css.headlineWrapper}>
      <span className={css.firstHeadline}>Hi, I'm Grant</span>
      <div className={css.secondHeadline}>
        <span className={css.staticText}>I CREATE</span>
        <span className={css.dynamicText}>{`${creations[creation]}`}</span>
      </div>
      <span className={css.thirdHeadline}>
        Web Developer from Los Angeles, CA
      </span>
    </div>
  )
}
