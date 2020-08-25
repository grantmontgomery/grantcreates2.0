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
  top: string
}

export const Creation: React.FunctionComponent<Props> = React.memo(
  ({ data, type }) => {
    const modalDispatch = useModalDispatch()
    const {
      modal,
      windows: { creation },
    } = useModalState()

    let windowElement: Window | null = null

    React.useLayoutEffect(() => {
      windowElement = window
    })

    React.useEffect(() => {
      if (!modal) {
        const body: HTMLBodyElement | null = document.querySelector("body")
        if (body) {
          body.style.overflowY = "scroll"
        }
        setState({ top: "0%" })
      }
    }, [modal])

    const [state, setState] = React.useState<State>({ top: "0%" })
    const creationRef = React.useRef<HTMLDivElement | null>(null)

    const handleTap = () => {
      const body: HTMLBodyElement | null = document.querySelector("body")
      if (body) {
        body.style.overflowY = "hidden"
        body.style.webkitTransform = "translateZ(0)"
      }
      if (creationRef.current && windowElement) {
        const boundingObject = creationRef.current.getBoundingClientRect()
        const elemTopPosition = boundingObject.top
        const creationElement = creationRef.current
        const elementWidth = creationElement.offsetWidth
        const windowTopCenter = windowElement.innerHeight / 2

        return windowElement.innerHeight >= windowElement.innerWidth
          ? (setState({
              top: `${
                windowTopCenter - elemTopPosition - elementWidth * 1.75
              }px`,
            }),
            modalDispatch(modalActions("CREATION")))
          : (setState({
              top: `50%`,
            }),
            modalDispatch(modalActions("CREATION")))
      }
    }

    const handleExit = () => {
      const body: HTMLBodyElement | null = document.querySelector("body")
      if (body) {
        body.style.overflowY = "scroll"
        body.style.webkitTransform = "none"
      }
      return setState({ top: "0%" }), modalDispatch(modalActions("CLOSE"))
    }

    const changeDisplay = () => {
      return creation ? (
        <CreationDetails
          detailsName={data.detailsName}
          details={data.details}
          technologies={data.technologies}
          githublink={data.githublink}
          link={data.link}
          handleExit={handleExit}
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
        <div
          className={`${css.creationWrapper} ${creation ? css.tapped : null}`}
          style={{ top: state.top }}
          ref={creationRef}
        >
          {changeDisplay()}
        </div>
        {creation ? null : (
          <div className={css.selectorTitleWrapper}>
            <div className={css.selctorTitle}>{data.name}</div>
            <div className={css.subTitle}>{data.subTitle}</div>
          </div>
        )}
      </React.Fragment>
    )
  }
)
