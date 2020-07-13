import * as React from "react"
import { Chain } from "./Chain"
import { LoadingAnvil } from "./LoadingAnvil"
import css from "./LoadingAssets.module.css"

interface Props {
  position: string
  top: string
  left: string
  transform: string
  height: string
  width: string
}

export const LoadingAssets = ({
  position,
  top,
  left,
  transform,
  height,
  width,
}: Props) => {
  return (
    // <div className={`${css.assets}`}>
    <React.Fragment>
      <div
        className={css.chainWrapper}
        style={{ position, left, top, transform }}
      >
        <Chain height={height} width={width}></Chain>
      </div>
      <div
        className={css.anvilWrapper}
        style={{ position, left, top, transform }}
      >
        <LoadingAnvil height={height} width={width}></LoadingAnvil>
      </div>
    </React.Fragment>

    // </div>
  )
}
