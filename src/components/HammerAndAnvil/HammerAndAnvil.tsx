import * as React from "react"
import { BoxTest } from "../BoxTest"
import {
  Canvas,
  useThree,
  useLoader,
  useFrame,
  Renderer,
} from "react-three-fiber"
import three from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import css from "./HammerAndAnvil.module.css"

export const HammerAndAnvil = () => {
  // const hammerandanvil = require("./GrantCreates3D.gltf")

  // const object = useLoader(GLTFLoader, hammerandanvil)

  return (
    <Canvas
      className={`${css.canvas}`}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true
        // gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}
      camera={{ position: [1, 3, 5] }}
    >
      <ambientLight></ambientLight>
      <pointLight position={[10, 10, 10]}></pointLight>

      <perspectiveCamera
        aspect={16 / 9}
        fov={45}
        near={1}
        far={1000}
      ></perspectiveCamera>
      <BoxTest></BoxTest>
      <scene autoUpdate={true} background={null} environment={null}></scene>
      {/* <BoxTest></BoxTest> */}
    </Canvas>
  )
  // const scene = new three.Scene(), camera = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0,1)
}
