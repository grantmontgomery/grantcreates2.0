import * as React from "react"
import { FullLogo, DarkLogo, Anvil } from "../Logos"
import { LinksWrapper } from "../LinksWrapper"
import { MobileNav } from "../MobileNav"
import { Link } from "gatsby"
import { useNavState } from "../../state/NavGlobal"
import { ModalDark } from "../ModalDark"
import { useModalDispatch, useModalState } from "../../state/ModalGlobal"
import { modalActions } from "../../state/actions"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import css from "./Nav.module.css"

export const Nav: React.FC = () => {
  const navState = useNavState()
  console.log(navState)
  const navRef = React.useRef<HTMLElement | null>(null)
  const {
    windows: { navLinks },
  } = useModalState()
  const modalDispatch = useModalDispatch()
  const applyLinksTransitions = () => {
    return navLinks ? (
      <CSSTransition
        timeout={250}
        classNames={{
          enter: css["linksEnter"],
          enterActive: css["linksEnterActive"],
          exit: css["linksExit"],
          exitActive: css["linksExitActive"],
        }}
      >
        <LinksWrapper handleTap={handleTap} location="mobileNav"></LinksWrapper>
      </CSSTransition>
    ) : null
  }

  React.useLayoutEffect(() => {
    navRef.current?.focus()
  })

  React.useEffect(() => {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset
      if (navRef.current) {
        const navHeight = navRef.current.offsetHeight
        navRef.current.style.opacity = "1"
        if (prevScrollpos > currentScrollPos) {
          navRef.current.style.top = "0"
        } else {
          navRef.current.style.top = `-${navHeight}px`
        }
        prevScrollpos = currentScrollPos
      }
    }
  }, [])

  const handleTap = () => {
    if (!navLinks) {
      const body: HTMLBodyElement | null = document.querySelector("body")
      if (body) {
        body.style.overflowY = "hidden"
      }
      return modalDispatch(modalActions("NAV_LINKS"))
    } else {
      const body: HTMLBodyElement | null = document.querySelector("body")
      if (body) {
        body.style.overflowY = "scroll"
      }
      return modalDispatch(modalActions("CLOSE"))
    }
  }

  return (
    <nav className={css.navWrapper} id="navBar" ref={navRef}>
      <Link to="/" className={css.logoLink}>
        <FullLogo location="navBar"></FullLogo>
      </Link>
      <MobileNav navLinks={navLinks} handleTap={handleTap}></MobileNav>
      <LinksWrapper location="navBar"></LinksWrapper>
      <ModalDark inMobileNav={true}></ModalDark>
      <TransitionGroup>{applyLinksTransitions()}</TransitionGroup>
    </nav>
  )
}
