import * as React from "react"
import css from "./LinksWrapper.module.css"

interface Props {
  location: string
  setMobileState: any
}

export const LinksWrapper: React.FC<Props> = ({ location, setMobileState }) => {
  return (
    <div className={`${css.linksWrapper} ${css[`${location}`]}`}>
      <div className={`link ${css.link}`}>
        <a href="/#creations" onClick={() => setMobileState({ menu: false })}>
          <div className={`text ${css.text}`}>Creations</div>
        </a>
      </div>
      <div className={`link ${css.link}`}>
        <a href="/#about" onClick={() => setMobileState({ menu: false })}>
          <div className={`text ${css.text}`}>About</div>
        </a>
      </div>
      <div className={`link ${css.link}`}>
        <a href="/#resume" onClick={() => setMobileState({ menu: false })}>
          <div className={`text ${css.text}`}>Resume</div>
        </a>
      </div>
      <div className={`link ${css.link}`}>
        <a href="/#contact" onClick={() => setMobileState({ menu: false })}>
          <div className={`text ${css.text}`}>Contact</div>
        </a>
      </div>
    </div>
  )
}
