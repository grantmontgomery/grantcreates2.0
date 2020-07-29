import * as React from "react"
import css from "./MobileNav.module.css"

type Props = {
  navLinks: boolean
  handleTap: () => void
}

export const MobileNav: React.FC<Props> = ({ navLinks, handleTap }) => {
  const alterMenu = () => {
    return navLinks ? "switched" : "normal"
  }

  return (
    <div className={`${css.mobileNavWrapper} `} onClick={handleTap}>
      <div className={`${css.animateFrame} ${css[`${alterMenu()}`]}`}>
        <div className={`${css.line1}`}></div>
        <div className={`${css.line2}`}></div>
        <div className={`${css.line3}`}></div>
      </div>
    </div>
  )
}
