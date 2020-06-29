import * as React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import css from "./HammerAndAnvil.module.css"

import * as THREE from "three"

const HammerAndAnvil = () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / (window.innerHeight * 0.89),
    0.1,
    1000
  )

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight * 0.89)
  renderer.setClearColor(0x000000, 0)
  document.getElementById("canvas").appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)

  camera.position.z = 0.15
  camera.position.y = 0.15

  const ambient = new THREE.AmbientLight(0x404040)

  const point = new THREE.PointLight(0xfffff, 1, 100)
  point.position.set(1, 1, 1)

  scene.add(point)
  scene.add(ambient)

  //   const geometry = new THREE.BoxBufferGeometry()
  //   const material = new THREE.MeshLambertMaterial({ color: 0xffffff })
  //   const cube = new THREE.Mesh(geometry, material)
  //   scene.add(cube)

  const loader = new GLTFLoader()

  loader.load(
    "static/GrantCreates3DGLB.glb",
    function (gltf) {
      scene.add(gltf.scene)
    },
    function (loading) {
      console.log(loading)
    },
    function (error) {
      console.error(error)
    }
  )

  const animate = function () {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }

  animate()
}

export const Scene = () => {
  React.useEffect(() => {
    HammerAndAnvil()
  }, [])
  return <div className={`${css.threeD}`} id="canvas"></div>
}
