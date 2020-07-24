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

export const Nav: React.FC = () => {
  const [mobileState, setMobileState] = React.useState<State>({ menu: false })
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

  React.useEffect(() => {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("NavBar").style.top = "0"
      } else {
        document.getElementById("NavBar").style.top = "-100%"
      }
      prevScrollpos = currentScrollPos
    }
  }, [])

  // let prevScrollpos = window.pageYOffset
  // window.onscroll = function () {
  //   let currentScrollPos = window.pageYOffset
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("NavBar").style.top = "0"
  //   } else {
  //     document.getElementById("NavBar").style.top = "-100%"
  //   }
  //   prevScrollpos = currentScrollPos
  // }

  return (
    <nav className={css.navWrapper} id="NavBar">
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
