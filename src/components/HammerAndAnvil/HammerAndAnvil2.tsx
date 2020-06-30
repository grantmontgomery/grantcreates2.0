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
  controls.enableZoom = false
  controls.autoRotate = true
  controls.maxPolarAngle = 0
  controls.minPolarAngle = 0.85
  camera.position.z = 5

  const ambient = new THREE.AmbientLight(0x00000)

  console.log(ambient)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
  directionalLight.position.set(0, 300, 500)
  directionalLight.castShadow = true

  const point = new THREE.PointLight(0xffffff, 1.5)
  console.log(point)
  point.position.set(10, 10, 10)

  scene.add(point)
  scene.add(ambient)

  const loader = new GLTFLoader()

  loader.load(
    "static/GrantCreates3DGLB.glb",
    function (gltf) {
      scene.add(gltf.scene)

      console.log(gltf.scene.children[0].children[0])

      gltf.scene.children[0].scale.x = 0.03
      gltf.scene.children[0].scale.y = 0.03
      gltf.scene.children[0].scale.z = 0.03

      gltf.scene.children[0].position.x = 0
      gltf.scene.children[0].position.y = 1
      gltf.scene.children[0].position.z = 0
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
