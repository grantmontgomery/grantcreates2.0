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

    const windowRefObject: React.MutableRefObject<
      Window | undefined
    > = React.useRef()

    React.useLayoutEffect(() => {
      windowRefObject.current = window
    })

    React.useEffect(() => {
      if (!modal) {
        const body: HTMLBodyElement | null = document.querySelector("body")
        if (body) body.style.overflowY = "scroll"
        setState({ top: "0%" })
      }
    }, [modal])

    const [state, setState] = React.useState<State>({ top: "0%" })
    const creationRef = React.useRef<HTMLDivElement | null>(null)

    const handleTap = () => {
      const body: HTMLBodyElement | null = document.querySelector("body")
      if (body) {
        body.style.overflowY = "hidden"
      }
      if (creationRef.current && windowRefObject.current) {
        const boundingObject = creationRef.current.getBoundingClientRect()
        const elemTopPosition = boundingObject.top
        const creationElement = creationRef.current
        const elementWidth = creationElement.offsetWidth
        const windowTopCenter = windowRefObject.current.innerHeight / 2

        const isPortraitMode =
          windowRefObject.current.innerHeight >=
          windowRefObject.current.innerWidth

        setState({
          top: isPortraitMode
            ? `${windowTopCenter - elemTopPosition - elementWidth * 1.75}px`
            : "50%",
        }),
          modalDispatch(modalActions("CREATION"))
      }
    }

    const handleExit = () => {
      const body: HTMLBodyElement | null = document.querySelector("body")
      if (body) {
        body.style.overflowY = "scroll"
      }
      setState({ top: "0%" }), modalDispatch(modalActions("CLOSE"))
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
        {!creation && (
          <div className={css.selectorTitleWrapper}>
            <div className={css.selctorTitle}>{data.name}</div>
            <div className={css.subTitle}>{data.subTitle}</div>
          </div>
        )}
      </React.Fragment>
    )
  }
)
