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
        <div className={css.link} onClick={handleTap}>
          <Link to="#aboutPage">
            <div className={css.text}>About</div>
          </Link>
        </div>
        <div className={css.link}>
          <Link to="#toolsPage" onClick={handleTap}>
            <div className={css.text}>Tools</div>
          </Link>
        </div>

        <div className={css.link}>
          <Link to="#contactPage" onClick={handleTap}>
            <div className={css.text}>Contact</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
