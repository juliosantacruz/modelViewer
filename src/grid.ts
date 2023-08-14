import "./style.css";
import { scene } from "./main";
import * as THREE from "three";



// Setbackground
// const spaceTexture = new THREE.TextureLoader().load(spaceBackground)
// spaceTexture.wrapS = THREE.RepeatWrapping;
// spaceTexture.wrapT = THREE.RepeatWrapping;
// spaceTexture.rotation.toFixed(90)
// spaceTexture.repeat.set( 1, 1 );
const bgColor = new THREE.Color("rgb(120, 120, 120)");
scene.background = bgColor;

// Grid
const gridHelper = new THREE.GridHelper(100, 10, "gray");
scene.add(gridHelper);

// Line Grid Axis X
// Line Color
const LineMaterialAxisX = new THREE.LineBasicMaterial({ color: 0x0000ff });

// Line Vector points
const pointsAxisX = [];
pointsAxisX.push(new THREE.Vector3(-100, 0, 0));
pointsAxisX.push(new THREE.Vector3(100, 0, 0));
// set line
const geometryLine = new THREE.BufferGeometry().setFromPoints(pointsAxisX);
// create line
const lineAxisX = new THREE.Line(geometryLine, LineMaterialAxisX);
scene.add(lineAxisX);

// Line Grid Axis Y
// Line Color
const LineMaterialAxisY = new THREE.LineBasicMaterial({ color: 0x00ffff });

// Line Vector points
const pointsAxisY = [];
pointsAxisY.push(new THREE.Vector3(0, -100, 0));
pointsAxisY.push(new THREE.Vector3(0, 100, 0));
// set line
const geometryLineY = new THREE.BufferGeometry().setFromPoints(pointsAxisY);
// create line
const lineAxisY = new THREE.Line(geometryLineY, LineMaterialAxisY);
scene.add(lineAxisY);

// Line Grid Axis Z
// Line Color
const LineMaterialAxisZ = new THREE.LineBasicMaterial({ color: 0xf560ff });

// Line Vector points
const pointsAxisZ = [];
pointsAxisZ.push(new THREE.Vector3(0, 0, -100));
pointsAxisZ.push(new THREE.Vector3(0, 0, 100));
// set line
const geometryLineZ = new THREE.BufferGeometry().setFromPoints(pointsAxisZ);
// create line
const lineAxisZ = new THREE.Line(geometryLineZ, LineMaterialAxisZ);
scene.add(lineAxisZ);