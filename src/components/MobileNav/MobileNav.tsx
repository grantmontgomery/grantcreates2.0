import * as React from "react"
import { LinksWrapper } from "../LinksWrapper"
import css from "./MobileNav.module.css"
import { useModalState } from "../../state/ModalGlobal"

type Props = {
  menu: boolean
  setMobileState: any
}

export const MobileNav: React.FC<Props> = ({ setMobileState, menu }) => {
  const alterMenu = () => {
    return menu ? "switched" : "normal"
  }

  const state = useModalState()

  console.log(state)

  return (
    <div
      className={`${css.mobileNavWrapper} `}
      onClick={() =>
        menu ? setMobileState({ menu: false }) : setMobileState({ menu: true })
      }
    >
      <div className={`${css.animateFrame} ${css[`${alterMenu()}`]}`}>
        <div className={`${css.line1}`}></div>
        <div className={`${css.line2}`}></div>
        <div className={`${css.line3}`}></div>
      </div>
    </div>
  )
}
