import * as React from "react"
import css from "./Creation.module.css"

interface Props {
  type: string
}

interface State {
  tapped: boolean
}

export const Creation = ({ type }: Props) => {
  const [state, setState] = React.useState<State>({ tapped: false })

  const handleTap = () => setState({ tapped: false })
  const exit = () =>
    state.tapped ? (
      <div className={`${css.exit}`} onClick={handleTap}></div>
    ) : null

  return (
    <div
      className={`${css.creationWrapper} ${state.tapped ? css.tapped : null}`}
      onClick={() =>
        state.tapped ? setState({ tapped: false }) : setState({ tapped: true })
      }
    >
      {/* {exit()} */}
      {/* <div className={`${css.exit}`} onClick={() => handleTap()}></div> */}
    </div>
  )
}
