import * as React from "react"
import { FullLogo, DarkLogo, Anvil } from "../Logos"
import { LinksWrapper } from "../LinksWrapper"
import { MobileNav } from "../MobileNav"
import { Props } from "./types"
import "./MobileTransition.css"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import * as css from "./Nav.module.css"

interface State {
  menu: boolean
}

export const Nav = () => {
  const [mobileState, setMobileState] = React.useState<State>({ menu: false })

  const applyTransitions = () => {
    return mobileState.menu ? (
      <CSSTransition
        timeout={250}
        classNames={{
          enter: "links-enter",
          enterActive: "links-enter-active",
          exit: "links-exit",
          exitActive: "links-exit-active",
        }}
      >
        <LinksWrapper location="mobileNav"></LinksWrapper>
      </CSSTransition>
    ) : null
  }

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
      <TransitionGroup>{applyTransitions()}</TransitionGroup>
    </nav>
  )
}
