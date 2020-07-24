import * as React from "react"
import css from "./LinksWrapper.module.css"

interface Props {
  location: string
}

export const LinksWrapper = ({ location }: Props) => {
  return (
    <div className={`${css.linksWrapper} ${css[`${location}`]}`}>
      <div className={`link ${css.link}`}>
        <a href="/#about">
          <div className={`text ${css.text}`}>Creations</div>
        </a>
      </div>
      <div className={`link ${css.link}`}>
        <a href="/#creations">
          <div className={`text ${css.text}`}>About</div>
        </a>
      </div>
      <div className={`link ${css.link}`}>
        <a href="/#resume">
          <div className={`text ${css.text}`}>Resume</div>
        </a>
      </div>
      <div className={`link ${css.link}`}>
        <a href="/#contact">
          <div className={`text ${css.text}`}>Contact</div>
        </a>
      </div>
    </div>
  )
}
