import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const container = document.querySelector('#Scene');

//Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

//Scene
const scene = new THREE.Scene();
//scene.background = new Color('skyblue');

//Camera
const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1; // the near clipping plane
const far = 1000; // the far clipping plane
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//console.log("running");
//Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement)

camera.position.set(0,0,2);
controls.update();



//Cube
const length = 1;
const width = 1;
const depth = 1;
const geometry = new THREE.BoxGeometry(length, width, depth);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const cube = new THREE.Mesh(geometry,material);
//console.log("running");
scene.add(cube);


//console.log("running");
renderer.render(scene, camera);
