import * as React from "react"
import { Link } from "gatsby"
import css from "./LinksWrapper.module.css"

interface Props {
  handleTap?: () => void
  location: string
}

export const LinksWrapper: React.FC<Props> = ({ location, handleTap }) => {
  let windowElement: Window | null = null

  React.useLayoutEffect(() => {
    windowElement = window
  })

  React.useEffect(() => {
    windowElement = window
  }, [])

  // const determineLink: () => string = () => {
  //   console.log(windowElement)
  //   if (windowElement) {
  //     return windowElement.innerWidth <= windowElement.innerHeight
  //       ? "/"
  //       : "/#creations"
  //   } else {
  //     return "/"
  //   }
  // }

  const determineLink: () => string = () => {
    if (windowElement)
      return windowElement.innerWidth <= windowElement.innerHeight
        ? "/"
        : "/#creations"
    else return "/"
  }
  return (
    <div className={`${css.linksWrapper} ${css[`${location}`]}`}>
      <div className={css.innerLinks}>
        <div className={css.link}>
          <Link to={determineLink()} onClick={handleTap}>
            <div className={css.text}>Creations</div>
          </Link>
        </div>
        <div className={css.link}>
          <a href="/#about" onClick={handleTap}>
            <div className={css.text}>About</div>
          </a>
        </div>
        <div className={css.link}>
          <a href="/#toolsPage" onClick={handleTap}>
            <div className={css.text}>Tools</div>
          </a>
        </div>

        <div className={css.link}>
          <a href="/#contact" onClick={handleTap}>
            <div className={css.text}>Contact</div>
          </a>
        </div>
      </div>
    </div>
  )
}
