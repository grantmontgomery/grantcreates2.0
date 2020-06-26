import * as React from "react"
import { extend, useFrame } from "react-three-fiber"
// import { useSpring, a } from "react-spring/three"

export const BoxTest = () => {
  // const [hovered, setHovered] = React.useState(false)
  // const [active, setActive] = React.useState(false)
  const mesh = React.useRef()

  useFrame(() => (mesh.current.rotation.y += 0.001))

  return (
    <mesh
      ref={mesh}
      // onPointerOver={() => setHovered(true)}
      // onPointerOut={() => setHovered(false)}
      // onClick={() => setActive(!active)}
      scale={[1, 1, 1]}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]}></boxBufferGeometry>
      <meshStandardMaterial
        attach="material"
        color="gray"
      ></meshStandardMaterial>
    </mesh>
  )
}
