import * as React from "react"
import { FullLogo, Anvil } from "../Logos"
import css from "./Nav.module.css"

export const Nav = () => {
  return (
    <nav className={`navWrapper ${css.navWrapper}`}>
      <FullLogo location="navBar"></FullLogo>
      {/* <Anvil location="navBar"></Anvil> */}
      <div className={`linksWrapper ${css.linksWrapper}`}>
        <div className={`link ${css.link}`}>
          <div className={`text ${css.text}`}>Creations</div>
        </div>
        <div className={`link ${css.link}`}>
          <div className={`text ${css.text}`}>Tools</div>
        </div>
        <div className={`link ${css.link}`}>
          <div className={`text ${css.text}`}>Resume</div>
        </div>
        <div className={`link ${css.link}`}>
          <div className={`text ${css.text}`}>About</div>
        </div>
        <div className={`link ${css.link}`}>
          <div className={`text ${css.text}`}>Contact</div>
        </div>
      </div>
    </nav>
  )
}
