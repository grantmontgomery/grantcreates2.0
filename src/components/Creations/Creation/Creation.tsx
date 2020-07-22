import * as React from "react"
import { MobileSelector } from "./MobileSelector"
import { CreationData } from "../../../data"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import css from "./Creation.module.css"
import { MobileTapped } from "./MobileTapped"

interface Props {
  data: CreationData
  type: string
}

interface State {
  tapped: boolean
  top: number
}

export const Creation = ({ data, type }: Props) => {
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

    return setState({
      tapped: true,
      top: windowTopCenter - elemTopPosition - halfHeight * 2.5,
    })
  }

  const changeDisplay = () => {
    return state.tapped ? (
      <MobileTapped
        detailsName={data.detailsName}
        details={data.details}
        technologies={data.technologies}
        githublink={data.githublink}
        link={data.link}
      ></MobileTapped>
    ) : (
      <MobileSelector
        name={name}
        handleTap={handleTap}
        type={type}
      ></MobileSelector>
    )
  }

  return (
    <React.Fragment>
      <div
        className={`${css.creationWrapper} ${state.tapped ? css.tapped : null}`}
        style={{ top: `${state.top}px` }}
        ref={creationRef}
      >
        {changeDisplay()}

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
          <div className={`${css.selctorTitle}`}>{data.name}</div>
          <div className={`${css.subTitle}`}>{data.subTitle}</div>
        </div>
      )}
    </React.Fragment>
  )
}
