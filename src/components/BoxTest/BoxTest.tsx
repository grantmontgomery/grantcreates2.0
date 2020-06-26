import * as React from "react"
import { Canvas } from "react-three-fiber"

export const BoxTest = () => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]}></boxBufferGeometry>
      <meshBasicMaterial
        attach="material"
        color={hovered ? "hotpink" : "gray"}
      ></meshBasicMaterial>
    </mesh>
  )
}
