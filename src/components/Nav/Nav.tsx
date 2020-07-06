import * as React from "react"
import { FullLogo, DarkLogo, Anvil } from "../Logos"
import { LinksWrapper } from "../LinksWrapper"
import { MobileNav } from "../MobileNav"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { MobileLinks } from "./MobileLinks"
import css from "./Nav.module.css"

interface State {
  menu: boolean
}

export const Nav = () => {
  const [mobileState, setMobileState] = React.useState<State>({ menu: false })
  console.log(css["links-enter"])
  const applyTransitions = () => {
    return mobileState.menu ? (
      <CSSTransition
        timeout={250}
        classNames={{
          enter: css["linksEnter"],
          enterActive: css["linksEnterActive"],
          exit: css["linksExit"],
          exitActive: css["linksExitActive"],
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
