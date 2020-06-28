// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(
//   90,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// var renderer = new THREE.WebGLRenderer();
// renderer.setClearColor("#DDDDDD");
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// document.body.appendChild(renderer.domElement);

// var light = new THREE.PointLight(0xfffff, 1.4, 1000);
// light.position.set(10, 10, 10);

// scene.add(light);

// //   var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
// //   var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
// //   var cube = new THREE.Mesh(geometry, material);

// var hammerandAnvil;

// var mtlLoader = new THREE.MTLLoader();
// mtlLoader.load("./GrantCreates3D.mtl", function (materials) {
//   materials.preload();

//   var objLoader = new THREE.OBJLoader();
//   objLoader.setMaterials(materials);
//   objLoader.load("./GrantCreates3DOBJ.obj", function (object) {
//     scene.add(object);
//     var hammerandAnvil = object;
//     object.position.z -= 70;
//   });
// });

// camera.position.z = 5;
// camera.position.y = 2;

// var animate = function () {
//   requestAnimationFrame(animate);
//   hammerandAnvil.rotation.x += 0.01;

//   renderer.render(scene, camera);
// };

// animate();
