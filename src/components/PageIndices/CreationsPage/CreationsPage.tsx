import * as React from "react"
import { CreationType } from "../../CreationType"
import { homePageContext } from "../PagesLogic/Context"
import { useModalState } from "../../../state/ModalGlobal"
import css from "./CreationsPage.module.css"

export const CreationsPage: React.FC = () => {
  const [creationsType, changeCreationType] = React.useState<
    "apps" | "websites"
  >("websites")
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
      <div className={css.headerWrapper}>
        <span>Creations</span>
      </div>
      <div className={css.creationTypes}>
        <button
          className={`${css.type} ${
            creationsType === "websites" ? css.active : null
          }`}
          onClick={() => changeCreationType("websites")}
        >
          Websites
        </button>
      </div>
      <CreationType type={creationsType}></CreationType>
    </section>
  )
}
