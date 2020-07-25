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

type Props = {}

export const Nav: React.FC = () => {
  const [mobileState, setMobileState] = React.useState<State>({ menu: false })
  const navRef = React.useRef<HTMLElement | null>(null)

  const applyLinksTransitions = () => {
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

  React.useLayoutEffect(() => {
    navRef.current?.focus()
  })

  React.useEffect(() => {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset
      console.log(currentScrollPos)
      console.log(currentScrollPos + 100)
      if (navRef.current) {
        const navHeight = navRef.current.offsetHeight
        if (prevScrollpos > currentScrollPos) {
          navRef.current.style.top = "0"
        } else {
          navRef.current.style.top = `-${navHeight}px`
        }
        prevScrollpos = currentScrollPos
      }
    }
  }, [])

  return (
    <nav className={css.navWrapper} ref={navRef}>
      <a href="/" className={`logoLink ${css.logoLink}`}>
        <FullLogo location="navBar"></FullLogo>
      </a>
      <MobileNav
        menu={mobileState.menu}
        setMobileState={setMobileState}
      ></MobileNav>
      <LinksWrapper location="navBar"></LinksWrapper>
      <TransitionGroup>{applyLinksTransitions()}</TransitionGroup>
    </nav>
  )
}
