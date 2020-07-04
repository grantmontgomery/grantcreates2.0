import * as React from "react"
import { FullLogo, DarkLogo, Anvil } from "../Logos"
import { LinksWrapper } from "../LinksWrapper"
import { MobileNav } from "../MobileNav"
import { TransitionGroup } from "react-transition-group"
import { MobileLinks } from "./MobileLinks"
import * as css from "./Nav.module.css"

interface State {
  menu: boolean
}

export const Nav = () => {
  const [mobileState, setMobileState] = React.useState<State>({ menu: false })

  return (
    <nav className={`navWrapper ${css.navWrapper}`}>
      <a href="/" className={`logoLink ${css.logoLink}`}>
        <FullLogo location="navBar"></FullLogo>
      </a>
      <MobileNav
        menu={mobileState.menu}
        setMobileState={setMobileState}
      ></MobileNav>
      <LinksWrapper location="navBar"></LinksWrapper>
      <TransitionGroup>
        <MobileLinks menu={mobileState.menu}></MobileLinks>
      </TransitionGroup>
    </nav>
  )
}
