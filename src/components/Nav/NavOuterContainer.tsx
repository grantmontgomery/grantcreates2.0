import * as React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import css from "./Nav.module.css"
import { Nav } from "./Nav"

type State = {
  scroll: string
}

export const NavOuterContainer = (): React.FC => {
  const navRef = React.useRef<HTMLElement | null>(null)

  const [state, setState] = React.useState<State>({ scroll: "up" })
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

  const applyLinksTransitions = () => {
    return state.scroll === "up" ? (
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

  const applyNavTransitions = () => {}
  return <TransitionGroup></TransitionGroup>
}
