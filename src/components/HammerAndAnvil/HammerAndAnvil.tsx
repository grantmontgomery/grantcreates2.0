import * as React from "react"
import { BoxTest } from "../BoxTest"
import { Canvas } from "react-three-fiber"
import css from "./HammerAndAnvil.module.css"

export const HammerAndAnvil = () => {
  return (
    <Canvas className={`${css.canvas}`}>
      <ambientLight></ambientLight>
      <pointLight position={[10, 10, 10]}></pointLight>
      <BoxTest></BoxTest>
    </Canvas>
  )
}
