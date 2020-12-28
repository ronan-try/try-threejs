import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// 1. scene
const scene = new THREE.Scene();
// 2. camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerWidth,
  0.1,
  1000
);
camera.position.z = 5;
// 3. renderer
const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize(window.innerWidth, window.innerWidth);
document.body.appendChild(renderer.domElement);

// to do
const geometry = new THREE.BoxGeometry();
// 
const texture = new THREE.TextureLoader().load('gltf/pony_cartoon/textures/Body_SG1_metallicRoughness.png')
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material = new THREE.MeshBasicMaterial({ map: texture });

// # obj
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

function animate () {
  requestAnimationFrame(animate);

  cubeMove();
  renderer.render(scene, camera);
}
animate();

// 立方体动起来
function cubeMove() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
})