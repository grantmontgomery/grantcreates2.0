import * as React from "react"
import { MobileSelector } from "./MobileSelector"
import { CreationDataInterface } from "../types"
import { modalActions } from "../../../state/actions"
import { useModalDispatch } from "../../../state/ModalGlobal"
import css from "./Creation.module.css"
import { MobileTapped } from "./MobileTapped"

interface Props {
  data: CreationDataInterface
  type: string
}

interface State {
  tapped: boolean
  top: number
}

export const Creation: React.FunctionComponent<Props> = ({ data, type }) => {
  const modalDispatch = useModalDispatch()

  const [state, setState] = React.useState<State>({ tapped: false, top: 0 })
  const creationRef = React.useRef<HTMLDivElement | null>(null)

  const handleTap = () => {
    const body: HTMLBodyElement | null = document.querySelector("body")
    if (body) {
      body.style.overflowY = "hidden"
    }
    if (creationRef.current) {
      const boundingObject = creationRef.current.getBoundingClientRect()
      const elemTopPosition = boundingObject.top

      const creationElement = creationRef.current
      const elementWidth = creationElement.offsetWidth

      const windowTopCenter = window.innerHeight / 2

      return (
        setState({
          tapped: true,
          top: windowTopCenter - elemTopPosition - elementWidth * 1.75,
        }),
        modalDispatch(modalActions("CREATION"))
      )
    }
  }

  const handleExit = () => {
    const body: HTMLBodyElement | null = document.querySelector("body")
    if (body) {
      body.style.overflowY = "scroll"
    }
    return (
      setState({ tapped: false, top: 0 }), modalDispatch(modalActions("CLOSE"))
    )
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
        name={data.name}
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
          onClick={handleExit}
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
