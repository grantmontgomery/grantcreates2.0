import * as React from "react"
import { MobileSelector } from "./MobileSelector"
import { CreationDataInterface } from "../types"
import { modalActions } from "../../../state/actions"
import { useModalDispatch, useModalState } from "../../../state/ModalGlobal"
import css from "./Creation.module.css"
import { CreationDetails } from "./CreationDetails"

interface Props {
  data: CreationDataInterface
  type: string
}

type State = {
  top: number
}

export const Creation: React.FunctionComponent<Props> = React.memo(
  ({ data, type }) => {
    const modalDispatch = useModalDispatch()
    const {
      modal,
      windows: { creation },
    } = useModalState()

    console.log("rerender creation")

    React.useEffect(() => {
      if (!modal) {
        const body: HTMLBodyElement | null = document.querySelector("body")
        if (body) {
          body.style.overflowY = "scroll"
        }
        setState({ top: 0 })
      }
    }, [modal])

    const [state, setState] = React.useState<State>({ top: 0 })
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
        const elementHeight = creationElement.offsetHeight
        const windowTopCenter = window.innerHeight / 2

        const landscapeElementWidth = window.innerWidth * 0.175
        const landscapeElementHeight = window.innerHeight * 0.8

        console.log(landscapeElementHeight, landscapeElementWidth)

        return window.innerHeight >= window.innerWidth
          ? (setState({
              top: windowTopCenter - elemTopPosition - elementWidth * 1.75,
            }),
            modalDispatch(modalActions("CREATION")))
          : (setState({
              top: windowTopCenter - elemTopPosition - elementHeight * 2,
            }),
            modalDispatch(modalActions("CREATION")))
      }
    }

    const handleExit = () => {
      const body: HTMLBodyElement | null = document.querySelector("body")
      if (body) {
        body.style.overflowY = "scroll"
      }
      return setState({ top: 0 }), modalDispatch(modalActions("CLOSE"))
    }

    console.log(state.top)

    const changeDisplay = () => {
      return creation ? (
        <CreationDetails
          detailsName={data.detailsName}
          details={data.details}
          technologies={data.technologies}
          githublink={data.githublink}
          link={data.link}
        ></CreationDetails>
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
        <div className={css.landscapeWrapper}>
          <CreationDetails
            detailsName={data.detailsName}
            details={data.details}
            technologies={data.technologies}
            githublink={data.githublink}
            link={data.link}
          ></CreationDetails>
        </div>
        <div
          className={`${css.creationWrapper} ${creation ? css.tapped : null}`}
          style={{ top: `${state.top}px` }}
          ref={creationRef}
        >
          {changeDisplay()}

          <div
            className={`${css.exit}`}
            style={{
              display: creation ? "block" : "none",
              transition: "250ms ease-out",
            }}
            onClick={handleExit}
          >
            <div className={`${css.xWrapper}`}>X</div>
          </div>
        </div>
        {creation ? null : (
          <div className={`${css.selectorTitleWrapper}`}>
            <div className={`${css.selctorTitle}`}>{data.name}</div>
            <div className={`${css.subTitle}`}>{data.subTitle}</div>
          </div>
        )}
      </React.Fragment>
    )
  }
)
