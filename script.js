import * as THREE from 'three';
//import { OrbitControls } from '@/node_modules/three/examples/jsm/controls/OrbitControls';

function main(){
  const canvas = document.querySelector('#c');
  const render = new THREE.WebGLRender({canvas});
}

//Perspective Camera
const fov = 75; // width of render distance
const aspect = window.innerWidth / window.innerHeight; // canvas default aspect
const near = 0.1; // min render distance
const far = 5; // max render distance
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far); // Sets Camera
camera.position.z(2); // Camera Position on Coordinate Plane

// !!Scene!!
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer(); // Renderer
renderer.setSize(window.innerWidth, window.innerHeight); // Renderer Size
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);