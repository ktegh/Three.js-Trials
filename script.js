import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const container = document.querySelector('#Scene');

//Scene
const scene = new THREE.Scene();
scene.background = new Color('skyblue');

//Camera
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane
const camera = new PerspectiveCamera(fov, aspect, near, far);
console.log("running");
camera.position.set(0,0,10);

//Cube
const length = 1;
const width = 1;
const depth = 1;
const geometry = new BoxBufferGeometry(length, width, depth);
const material = new MeshBasicMaterial({color: x44ax88});
const cube = new Mesh(geometry,material);
console.log("running");
scene.add(cube);

//Renderer
const renderer = new WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.append(renderer.domElement);
console.log("running");
renderer.render(scene, camera);
