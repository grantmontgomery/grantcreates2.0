import * as React from "react"
import { CreationType } from "../../CreationType"
import { homePageContext } from "../PagesLogic/Context"
import css from "./CreationsPage.module.css"

interface Props {
  location: string
}

interface State {
  type: string
}
export const CreationsPage: React.FC<Props> = ({ location }) => {
  const [state, setState] = React.useState<State>({ type: "apps" })
  const { creationsRef } = React.useContext(homePageContext)

  return (
    <section
      id="creations"
      ref={creationsRef}
      className={`${css.creations} ${css[location]}`}
    >
      <div className={`${css.headerWrapper}`}>
        <div>Creations</div>
      </div>
      <ul className={`${css.creationTypes}`}>
        <li
          className={`${css.type} ${state.type === "apps" ? css.active : null}`}
          onClick={() => setState({ type: "apps" })}
        >
          <span>Apps</span>
        </li>
        <li
          className={`${css.type} ${
            state.type === "websites" ? css.active : null
          }`}
          onClick={() => setState({ type: "websites" })}
        >
          <span>Websites</span>
        </li>
      </ul>
      <CreationType type={state.type}></CreationType>
    </section>
  )
}
