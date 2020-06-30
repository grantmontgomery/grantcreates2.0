import * as React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper"
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
  renderer.gammaFactor = 2.2
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  console.log(renderer)

  document.getElementById("canvas").appendChild(renderer.domElement)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  controls.autoRotate = true
  controls.enablePan = false
  controls.maxPolarAngle = 1.5
  controls.minPolarAngle = 0
  camera.position.z = 5
  console.log(controls)

  const ambient = new THREE.AmbientLight(0x00000)

  console.log(ambient)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
  directionalLight.position.set(30, 30, 15)
  directionalLight.castShadow = true
  directionalLight.shadow.mapSize.width = 1024
  directionalLight.shadow.mapSize.height = 1024
  console.log(directionalLight)

  const lightHolder = new THREE.Group()
  lightHolder.add(directionalLight)
  scene.add(lightHolder)

  // scene.add(directionalLight)
  scene.add(ambient)

  const loader = new GLTFLoader()

  loader.load(
    "static/GrantCreates3DGLB2.glb",
    function (gltf) {
      scene.add(gltf.scene)

      gltf.scene.children[0].scale.x = 0.03
      gltf.scene.children[0].scale.y = 0.03
      gltf.scene.children[0].scale.z = 0.03

      gltf.scene.children[0].traverse(child => {
        switch (child.type) {
          case "Object3D":
            return (child.castShadow = true), (child.receiveShadow = true)
          case "Mesh":
            return (
              child.name.includes("Circle_-_baked") ||
              child.name.includes("Path_-_baked")
                ? null
                : (child.castShadow = true),
              (child.receiveShadow = true)
            )
        }
      })

      gltf.scene.children[0].position.x = 0
      gltf.scene.children[0].position.y = 1
      gltf.scene.children[0].position.z = 0
      // gltf.scene.children[0].children[1].visible = false
      console.log(gltf.scene)
    },

    function (loading) {
      console.log(loading)
    },
    function (error) {
      console.error(error)
    }
  )

  const rectLight = new THREE.RectAreaLight(0x61dbfb, 2, 2, 2)
  // rectLight.position.set(
  //   0.014805922368961166,
  //   5.2348530855468685,
  //   58.49785808001576
  // )

  rectLight.position.set(0, 5, 0)

  rectLight.lookAt(0, 0, 0)
  console.log(rectLight)
  // scene.add(rectLight)

  const helper = new RectAreaLightHelper(rectLight)
  // scene.add(helper)

  const animate = function () {
    requestAnimationFrame(animate)
    controls.update()
    lightHolder.quaternion.copy(camera.quaternion)
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
