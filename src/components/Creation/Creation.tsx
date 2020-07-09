import * as React from "react"
import { MobileSelector } from "./MobileSelector"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import css from "./Creation.module.css"
import { MobileTapped } from "./MobileTapped"

interface Props {
  type: string
}

interface State {
  tapped: boolean
  top: number
}

export const Creation = ({ type }: Props) => {
  const [state, setState] = React.useState<State>({ tapped: false, top: 0 })

  const creationRef = React.useRef<HTMLDivElement>(null)

  const handleTap = () => {
    creationRef.current?.focus()
    const boundingObject = creationRef.current?.getBoundingClientRect()
    const elemTopPosition = boundingObject?.top

    const creationElement = creationRef.current
    const elementHeight = creationElement?.offsetHeight

    const halfHeight = elementHeight / 2

    const windowTopCenter = window.innerHeight / 2

    return state.tapped
      ? setState({ tapped: false, top: 0 })
      : setState({
          tapped: true,
          top: windowTopCenter - elemTopPosition - halfHeight * 2.25,
        })

    // console.log("X: " + relativeX + "  Y: " + relativeY)
  }

  const changeDisplay = () => {
    return state.tapped ? (
      <MobileTapped></MobileTapped>
    ) : (
      <MobileSelector></MobileSelector>
    )
  }

  const applyTransitions = () => {
    return state.tapped ? (
      <CSSTransition
        timeout={250}
        classNames={{
          enter: css["modalEnter"],
          enterActive: css["modalEnterActive"],
          exit: css["modalExit"],
          exitActive: css["modalExitActive"],
        }}
      >
        <div
          className={`${css.modalDark}`}
          onClick={() => setState({ tapped: false, top: 0 })}
          // onTouchStart={() => setState({ tapped: false })}
        ></div>
      </CSSTransition>
    ) : null
  }
  return (
    <React.Fragment>
      <div
        className={`${css.creationWrapper} ${state.tapped ? css.tapped : null}`}
        style={{ top: `${state.top}px` }}
        ref={creationRef}
        onClick={handleTap}
      >
        {changeDisplay()}

        {/* {state.tapped ? <MobileSelector></MobileSelector> : null} */}
        <div
          className={`${css.exit}`}
          style={{
            display: state.tapped ? "block" : "none",
            transition: "250ms ease-out",
          }}
          onClick={() => setState({ tapped: false, top: 0 })}
        >
          <div className={`${css.xWrapper}`}>X</div>
        </div>
      </div>
      {state.tapped ? null : (
        <div className={`${css.selectorTitleWrapper}`}>
          <div className={`${css.selctorTitle}`}>Seknd</div>
          <div className={`${css.subTitle}`}>React Web Application</div>
        </div>
      )}
      {/* <TransitionGroup>{applyTransitions()}</TransitionGroup> */}
    </React.Fragment>
  )
}
