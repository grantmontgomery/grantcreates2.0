import * as React from "react"
import { FullLogo, Anvil } from "../Logos"
import css from "./Nav.module.css"

export const Nav = () => {
  return (
    <div className={`navWrapper ${css.navWrapper}`}>
      <FullLogo location="navBar"></FullLogo>
      {/* <Anvil location="navBar"></Anvil> */}
    </div>
  )
}
