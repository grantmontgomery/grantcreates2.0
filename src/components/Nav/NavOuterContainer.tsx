import * as React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import css from "./Nav.module.css"
import { Nav } from "./Nav"

type State = {
  scroll: string
}

export const NavOuterContainer = (): object => {
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

  const applyNavTransitions = () => {
    return state.scroll === "up" ? (
      <CSSTransition
        timeout={250}
        classNames={{
          enter: css["navEnter"],
          enterActive: css["navEnterActive"],
          exit: css["navExit"],
          exitActive: css["navExitActive"],
        }}
      >
        <Nav></Nav>
      </CSSTransition>
    ) : null
  }

  return <TransitionGroup>{applyNavTransitions()}</TransitionGroup>
}
