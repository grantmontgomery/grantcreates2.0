import * as React from "react"
import { FullLogo, DarkLogo, Anvil } from "../Logos"
import { Props } from "./types"
import css from "./Nav.module.css"

export const Nav = () => {
  return (
    <nav className={`navWrapper ${css.navWrapper}`}>
      <a href="/" className={`logoLink ${css.logoLink}`}>
        <FullLogo location="navBar"></FullLogo>
        {/* <DarkLogo location="navBar"></DarkLogo> */}
      </a>
      <div className={`linksWrapper ${css.linksWrapper}`}>
        <div className={`link ${css.link}`}>
          <a href="/#about">
            <div className={`text ${css.text}`}>About</div>
          </a>
        </div>
        <div className={`link ${css.link}`}>
          <a href="/#creations">
            <div className={`text ${css.text}`}>Creations</div>
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
    </nav>
  )
}
