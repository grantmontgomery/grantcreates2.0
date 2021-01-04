import * as React from "react"
import css from "./Headline.module.css"

export const Headline: React.FC = () => {
  const creations: string[] = ["RAD", "COOL", "SHARP", "UNIQUE"]

  const [creation, setCreation] = React.useState<number>(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCreation(creation => {
        return creation < creations.length - 1 ? (creation += 1) : 0
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={css.headlineWrapper}>
      <span className={css.firstHeadline}>Hi, I'm Grant</span>
      <p className={css.secondHeadline}>
        I CREATE THINGS THAT LOOK
        <span className={css.dynamicText}>{`${creations[creation]}`}</span>
      </p>
      <span className={css.thirdHeadline}>
        Full Stack Creator and React Developer
      </span>
    </div>
  )
}
