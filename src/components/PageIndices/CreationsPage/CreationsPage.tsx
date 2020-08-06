import * as React from "react"
import { CreationType } from "../../CreationType"
import { homePageContext } from "../PagesLogic/Context"
import { useModalState } from "../../../state/ModalGlobal"
import css from "./CreationsPage.module.css"

interface State {
  type: string
}
export const CreationsPage: React.FC = () => {
  const [state, setState] = React.useState<State>({ type: "apps" })
  const { creationsRef } = React.useContext(homePageContext)

  const {
    windows: { creation },
  } = useModalState()
  return (
    <section
      id="creations"
      ref={creationsRef}
      className={css.creations}
      // style={{ zIndex: creation ? 4 : 2 }}
    >
      <div className={`${css.headerWrapper}`}>
        <span>Creations</span>
      </div>
      <div className={`${css.creationTypes}`}>
        <button
          className={`${css.type} ${state.type === "apps" ? css.active : null}`}
          onClick={() => setState({ type: "apps" })}
        >
          Apps
        </button>
        <button
          className={`${css.type} ${
            state.type === "websites" ? css.active : null
          }`}
          onClick={() => setState({ type: "websites" })}
        >
          Websites
        </button>
      </div>
      <CreationType type={state.type}></CreationType>
    </section>
  )
}
