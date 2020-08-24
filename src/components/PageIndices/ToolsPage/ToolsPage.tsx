import * as React from "react"
import { Scene } from "../../Hammer"
import { Tools } from "../../Tools"
import css from "./ToolsPage.module.css"

export const ToolsPage: React.FC = () => {
  return (
    <section id="toolsPage" className={css.toolsPage}>
      <div className={css.toolsHeader}>Tools</div>
      <div className={css.hammer}></div>
      <Scene></Scene>
      <Tools></Tools>
    </section>
  )
}
