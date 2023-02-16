import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const container = document.querySelector('#canvas');

//Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);
//canvas.getContext('2d');

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
const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 0, 5);
controls.update();

//light
const light1 = new THREE.DirectionalLight(0xffffff, 1);
const light2 = new THREE.DirectionalLight(0xffffff, 1);
const light3 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(0, 0, 5);
light2.target.position.set(0, 0, 0);
light3.position.set(0, 0, 5);
light3.target.position.set(0, 0, 0);
light2.position.set(0, 0, -5);
light2.target.position.set(0, 0, 0);
scene.add(light1);
scene.add(light2);
scene.add(light2.target);
scene.add(light3);
scene.add(light3.target);

//Cube
const length = 1;
const width = 1;
const depth = 1;
const geometry = new THREE.BoxGeometry(length, width, depth);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff0000 });
const cube = new THREE.Mesh(geometry, material);
//console.log("running");
scene.add(cube);

//console.log("running");
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
