import * as React from "react"
import { FullLogo, DarkLogo, Anvil } from "../Logos"
import { LinksWrapper } from "../LinksWrapper"
import { MobileNav } from "../MobileNav"
import { Props } from "./types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import css from "./Nav.module.css"

interface State {
  menu: boolean
}

export const Nav = () => {
  const [mobileState, setMobileState] = React.useState<State>({ menu: false })

  // const applyTransitions = () => {
  //   return mobileState.menu ?  (
  //     <CSSTransition
  //       timeout={250}
  //       classNames={{
  //         enter: `${transitions["modalParts-enter"]}`,
  //         enterActive: `${transitions["modalParts-enter-active"]}`,
  //         exit: `${transitions["modalParts-exit"]}`,
  //         exitActive: `${transitions["modalParts-exit-active"]}`,
  //       }}
  //     >
  //       <PartsModal handlePartsClose={handlePartsClose}></PartsModal>
  //     </CSSTransition> : null
  //   );
  // };

  return (
    <nav className={`navWrapper ${css.navWrapper}`}>
      <a href="/" className={`logoLink ${css.logoLink}`}>
        <FullLogo location="navBar"></FullLogo>
        {/* <DarkLogo location="navBar"></DarkLogo> */}
      </a>
      {/* <div className={`linksWrapper ${css.linksWrapper}`}>
        <div className={`link ${css.link}`}>
          <a href="/#about">
            <div className={`text ${css.text}`}>About</div>
          </a>
        </div>
        <div className={`link ${css.link}`}>
          <a href="/#creations">
            <div className={`text ${css.text}`}>Creations</div>
          </a>
        </div>
        <div className={`link ${css.link}`}>
          <a href="/#resume">
            <div className={`text ${css.text}`}>Resume</div>
          </a>
        </div>
        <div className={`link ${css.link}`}>
          <a href="/#contact">
            <div className={`text ${css.text}`}>Contact</div>
          </a>
        </div> */}
      {/* </div> */}
      <MobileNav
        menu={mobileState.menu}
        setMobileState={setMobileState}
      ></MobileNav>
      <LinksWrapper location="navBar"></LinksWrapper>
      {mobileState.menu ? (
        <LinksWrapper location="mobileNav"></LinksWrapper>
      ) : null}
    </nav>
  )
}
