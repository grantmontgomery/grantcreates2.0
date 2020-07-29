import * as React from "react"
import css from "./LinksWrapper.module.css"

interface Props {
  handleTap?: () => void
  location: string
}

export const LinksWrapper: React.FC<Props> = ({ location, handleTap }) => {
  console.log("rerender Links")

  return (
    <div className={`${css.linksWrapper} ${css[`${location}`]}`}>
      <div className={css.link}>
        <a href="/#creations" onClick={handleTap}>
          <div className={css.text}>Creations</div>
        </a>
      </div>
      <div className={css.link}>
        <a href="/#about" onClick={handleTap}>
          <div className={css.text}>About</div>
        </a>
      </div>
      <div className={css.link}>
        <a href="/#resume" onClick={handleTap}>
          <div className={css.text}>Resume</div>
        </a>
      </div>
      <div className={css.link}>
        <a href="/#contact" onClick={handleTap}>
          <div className={css.text}>Contact</div>
        </a>
      </div>
    </div>
  )
}
