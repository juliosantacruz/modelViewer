import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

// import gltfModel1 from "./assets/gltf/test1/test1.gltf";
// import gltfModel2 from "./assets/gltf/test2/test2.gltf";
// import gltfModel3 from "./assets/gltf/test3/test3.gltf";
// import gltfModel4 from "./assets/gltf/test4/scene.gltf";


// Boiler Plate

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg") as Element,
});

camera.position.setZ(40);
camera.position.setX(20);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled= true
renderer.render(scene, camera);

// Ilumuminacion
// const ambientLight = new THREE.AmbientLight(0xffffff); // soft white light
// scene.add(ambientLight);

const pointLight1 =  new THREE.PointLight(0xffffff, 1000, 0)
pointLight1.position.set(20,30,30)
const lightHelper1 = new THREE.PointLightHelper(pointLight1)

const pointLight2 =  new THREE.PointLight(0xffffff,100)
pointLight2.position.set(6,12,20)
const lightHelper2 = new THREE.PointLightHelper(pointLight2)


const pointLight3 =  new THREE.PointLight(0xffffff, 10)
pointLight3.position.set(11,20,10)
const lightHelper3 = new THREE.PointLightHelper(pointLight3)

scene.add(pointLight1, lightHelper1, pointLight2, lightHelper2, lightHelper3, pointLight3);


const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 100 );
scene.add( light );

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(13,12,30)
spotLight.intensity=2
spotLight.angle=.45
spotLight.penumbra=.3
spotLight.castShadow=true
spotLight.shadow.mapSize.width=1024
spotLight.shadow.mapSize.height=1024
spotLight.shadow.camera.near=5
spotLight.shadow.camera.far=10
spotLight.shadow.focus=1



const spotLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLight, spotLightHelper)




// Setbackground 
// const spaceTexture = new THREE.TextureLoader().load(spaceBackground)
// spaceTexture.wrapS = THREE.RepeatWrapping;
// spaceTexture.wrapT = THREE.RepeatWrapping;
// spaceTexture.rotation.toFixed(90)
// spaceTexture.repeat.set( 1, 1 );
const bgColor = new THREE.Color("rgb(120, 120, 120)")
scene.background=bgColor

// Grid
var gridOptions = { color: 0xffffff, colorXAxis: 0xff0000, colorZAxis: 0x0000ff };
   

const gridHelper = new THREE.GridHelper(100, 10, "white", "gray");
 
scene.add(gridHelper);

// Torus
const torusGeometry = new THREE.TorusGeometry(35, 1, 50, 30);
const torusMaterial = new THREE.MeshStandardMaterial({ color: "yellow" });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);

// Orbit Control
const orbitControl = new OrbitControls(camera, renderer.domElement);

// GLTF
// const gltfLoader = new GLTFLoader();
// gltfLoader.load(
//   './assets/gltf/test2/test2.gltf',
//   function (gltf) {
//     // console.log(gltf);
//     // const root = gltf.scene;
//     // root.scale.set(.1,.1,.1)
  
//   scene.add( gltf.scene );

// 		gltf.animations; // Array<THREE.AnimationClip>
// 		gltf.scene; // THREE.Group
// 		gltf.scenes; // Array<THREE.Group>
// 		gltf.cameras; // Array<THREE.Camera>
// 		gltf.asset; // Object
  
//   },
//   function (xhr) {
//     console.log(xhr.loaded / xhr.total, "% loaded");
//   },
//   function (error) {
//     console.log( 'An error happened => ', error );
//   }
// );


// GLB  <-- Working
const glbLoader = new GLTFLoader();
glbLoader.load(
  './assets/glb/pb4-test.glb',
  function (glb) {
   
  
  scene.add( glb.scene );

		glb.animations; // Array<THREE.AnimationClip>
		glb.scene; // THREE.Group
		glb.scenes; // Array<THREE.Group>
spotLight.shadow.camera.near=5
glb.scene.castShadow=true
    glb.scene.traverse( function(node){
      if(node.isObject3D){
        node.castShadow=true
      }
    })
    glb.cameras; // Array<THREE.Camera>
		glb.asset; // Object
    
  
  },
  function (xhr) {
    console.log(xhr.loaded / xhr.total, "% loaded");
  },
  function (error) {
    console.log( 'An error happened =>', error );
  }
);






// Object models 
// const loaderObj = new OBJLoader()
// loaderObj.load(
// 	// resource URL
// 	'/assets/obj/test 1/test1.obj',

// 	// onLoad callback
// 	// Here the loaded data is assumed to be an object
// 	function ( obj ) {
// 		// Add the loaded object to the scene
//     obj.scale.set(.0010,.0010,.001)
//     obj.rotation.x=180
//     obj.rotation.y=180

//     obj.rotation.z=180

  

//     console.log(obj)
// 		scene.add( obj );
// 	},

// 	// onProgress callback
// 	function ( xhr ) {
// 		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
// 	},

// 	// onError callback
// 	function ( err ) {
// 		console.error( 'An error happened =>', err );
// 	}
// );


function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.005;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.01;

 

  orbitControl.update();

  renderer.render(scene, camera);
}

animate();
