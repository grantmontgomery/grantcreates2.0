import * as React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
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

  React.useEffect(() => {
    if (windowElement) {
      windowElement.innerWidth < windowElement.innerHeight
        ? setLink("")
        : setLink("#creations")
    }
  }, [windowElement])

  const handleLink: (element: string) => void = element => {
    if (handleTap) {
      handleTap()
      scrollTo(element)
    } else {
      scrollTo(element)
    }
  }

  return (
    <div className={`${css.linksWrapper} ${css[location]}`}>
      <div className={css.innerLinks}>
        <div className={css.link}>
          <Link
            to={link}
            onClick={() => {
              if (handleTap) {
                return handleTap(), scrollTo("body")
              } else {
                return scrollTo("body")
              }
            }}
          >
            <div className={css.text}>Creations</div>
          </Link>
        </div>
        <div className={css.link}>
          <Link to="#aboutPage" onClick={() => handleLink("#aboutPage")}>
            <div className={css.text}>About</div>
          </Link>
        </div>
        <div className={css.link}>
          <Link to="#toolsPage" onClick={() => handleLink("#toolsPage")}>
            <div className={css.text}>Tools</div>
          </Link>
        </div>

        <div className={css.link}>
          <Link to="#contactPage" onClick={() => handleLink("#contactPage")}>
            <div className={css.text}>Contact</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
