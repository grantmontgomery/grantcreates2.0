import * as React from "react"
import { FullLogo } from "../Logos"
import { LinksWrapper } from "../LinksWrapper"
import { MobileNav } from "../MobileNav"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Link } from "gatsby"
import { ModalDark } from "../ModalDark"
import { useModalDispatch, useModalState } from "../../state/ModalGlobal"
import { modalActions } from "../../state/actions"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import css from "./Nav.module.css"

export const Nav: React.FC = () => {
  const navRef = React.useRef<HTMLElement | null>(null)
  const {
    windows: { navLinks },
  } = useModalState()
  const modalDispatch = useModalDispatch()
  const applyLinksTransitions = () => {
    return (
      navLinks && (
        <CSSTransition
          timeout={250}
          classNames={{
            enter: css["linksEnter"],
            enterActive: css["linksEnterActive"],
            exit: css["linksExit"],
            exitActive: css["linksExitActive"],
          }}
        >
          <LinksWrapper
            handleTap={handleTap}
            location="mobileNav"
          ></LinksWrapper>
        </CSSTransition>
      )
    )
  }

  React.useLayoutEffect(() => {
    navRef.current?.focus()
  })

  React.useEffect(() => {
    if (window) {
      let prevScrollpos = window.pageYOffset
      window.onscroll = function () {
        let currentScrollPos = window.pageYOffset
        if (navRef.current) {
          const navHeight = navRef.current.offsetHeight
          navRef.current.style.opacity = "1"
          const currentScrollIsSmaller = prevScrollpos > currentScrollPos
          const navRetractPosition = currentScrollIsSmaller
            ? "0"
            : `-${navHeight * 1.5}px`
          navRef.current.style.top = navRetractPosition

          prevScrollpos = currentScrollPos
        }
      }
    }
  }, [])

  const handleTap = () => {
    const body: HTMLBodyElement | null = document.querySelector("body")
    if (body) {
      body.style.overflowY = navLinks ? "scroll" : "hidden"
    }
    modalDispatch(modalActions(navLinks ? "CLOSE" : "NAV_LINKS"))
  }

  return (
    <nav className={css.navWrapper} id="navBar" ref={navRef}>
      <Link to="/" className={css.logoLink} onClick={() => scrollTo("body")}>
        <FullLogo location="navBar"></FullLogo>
      </Link>
      <MobileNav navLinks={navLinks} handleTap={handleTap}></MobileNav>
      <LinksWrapper location="navBar"></LinksWrapper>
      <ModalDark inMobileNav={true}></ModalDark>
      <TransitionGroup id="mobileLinkTransitions">
        {applyLinksTransitions()}
      </TransitionGroup>
    </nav>
  )
}
