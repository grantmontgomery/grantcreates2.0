import * as React from "react"
import { Link } from "gatsby"
import css from "./LinksWrapper.module.css"

interface Props {
  handleTap?: () => void
  location: string
}

export const LinksWrapper: React.FC<Props> = ({ location, handleTap }) => {
  let windowElement: Window | null = null

  const [link, setLink] = React.useState<string>("/")

  React.useLayoutEffect(() => {
    windowElement = window
  })

  const determineLink: () => void = () => {
    console.log(windowElement)
    if (windowElement)
      return windowElement.innerWidth < windowElement.innerHeight
        ? setLink("/")
        : setLink("/#creations")
    else return
  }

  React.useEffect(() => {
    determineLink()
  }, [windowElement])

  return (
    <div className={`${css.linksWrapper} ${css[`${location}`]}`}>
      <div className={css.innerLinks}>
        <div className={css.link}>
          <Link to={link} onClick={handleTap}>
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
