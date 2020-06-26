import * as React from "react"
import { extend, useThree, useRender } from "react-three-fiber"
export const Controls = () => {
  useRender(function () {
    return orbitRef.current.update()
  })
  extend({ OrbitControls })

  const { camera, gl } = useThree()
  const orbitRef = React.useRef()
  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />
}
