import * as React from "react"
import css from "./CreationsPage.module.css"

interface Props {
  location: string
}

interface State {
  type: string
}
export const CreationsPage = ({ location }: Props) => {
  const [state, setState] = React.useState<State>({ type: "Apps" })

  return (
    <section id="creations" className={`${css.creations} ${css[location]}`}>
      <div className={`${css.headerWrapper}`}>
        <h1>Creations</h1>
      </div>
      <ul className={`${css.creationTypes}`}>
        <li
          className={`${css.type} ${state.type === "Apps" ? css.active : null}`}
          onClick={() => setState({ type: "Apps" })}
        >
          <span>Apps</span>
        </li>
        <li
          className={`${css.type} ${
            state.type === "Websites" ? css.active : null
          }`}
          onClick={() => setState({ type: "Websites" })}
        >
          <span>Websites</span>
        </li>
        <li
          className={`${css.type} ${
            state.type === "Designs" ? css.active : null
          }`}
          onClick={() => setState({ type: "Designs" })}
        >
          <span>Designs</span>
        </li>
        <li
          className={`${css.type} ${
            state.type === "Experiences" ? css.active : null
          }`}
          onClick={() => setState({ type: "Experiences" })}
        >
          <span>Experiences</span>
        </li>
      </ul>
      <div className={`${css.typeSection}`}>{state.type}</div>
    </section>
  )
}
