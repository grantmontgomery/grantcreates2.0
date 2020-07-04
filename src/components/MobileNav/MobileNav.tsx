import * as React from "react"
import { LinksWrapper } from "../LinksWrapper"
import css from "./MobileNav.module.css"

// interface State {
//   menu: boolean
// }

export const MobileNav = ({ setMobileState, menu }) => {
  // const [mobileState, setMobileState] = React.useState<State>({ menu: false })

  return (
    <div
      className={`${css.mobileNavWrapper}`}
      onClick={() =>
        menu ? setMobileState({ menu: false }) : setMobileState({ menu: true })
      }
    >
      <div className={`${css.line1}`}></div>
      <div className={`${css.line2}`}></div>
      <div className={`${css.line3}`}></div>
    </div>
  )
}
