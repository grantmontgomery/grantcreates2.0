import * as React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper"
import css from "./HammerAndAnvil.module.css"

import * as THREE from "three"

const HammerAndAnvil = () => {
  const scene = new THREE.Scene()

  ///Camera

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / (window.innerHeight * 0.89),
    0.1,
    1000
  )

  console.log(camera)

  camera.position.z = 5
  camera.position.y = 4
  camera.position.x = 0

  ///Renderer

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.89 * 0.8)
  renderer.setClearColor(0x000000, 0)
  renderer.gammaFactor = 2.2
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  document.getElementById("canvas").appendChild(renderer.domElement)

  //Controls/////

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  controls.autoRotate = true
  controls.enablePan = false
  controls.rotateSpeed = 0.25
  controls.maxPolarAngle = 1.5
  controls.minPolarAngle = 0

  console.log(controls)

  // Light //////////////////////////////

  const ambient = new THREE.AmbientLight(0x00000)

  const directionalLight = new THREE.DirectionalLight(0xcccccc, 1.5)
  directionalLight.position.set(30, 80, 100)
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

      gltf.scene.children[0].scale.x = 0.04
      gltf.scene.children[0].scale.y = 0.04
      gltf.scene.children[0].scale.z = 0.04

      // gltf.scene.children[0].scale.x = 0.03
      // gltf.scene.children[0].scale.y = 0.03
      // gltf.scene.children[0].scale.z = 0.03

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

      const box = new THREE.Box3().setFromObject(gltf.scene)
      const center = box.getCenter(new THREE.Vector3())

      gltf.scene.position.x += gltf.scene.position.x - center.x
      gltf.scene.position.y += gltf.scene.position.y - center.y
      gltf.scene.position.z += gltf.scene.position.z - center.z
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
