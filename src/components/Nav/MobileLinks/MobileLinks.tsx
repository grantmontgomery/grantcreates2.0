import * as React from "react"
import { LinksWrapper } from "../../LinksWrapper"
import "./MobileLinks.css"
import { CSSTransition } from "react-transition-group"

interface Props {
  menu: boolean
}

export const MobileLinks = ({ menu }: Props) => {
  return menu ? (
    <CSSTransition
      timeout={250}
      classNames={{
        enter: "links-enter",
        enterActive: "links-enter-active",
        exit: "links-exit",
        exitActive: "links-exit-active",
      }}
    >
      <LinksWrapper location="mobileNav"></LinksWrapper>
    </CSSTransition>
  ) : null
}
