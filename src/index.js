import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/**
 * 创建文字
 * https://threejs.org/docs/index.html#manual/zh/introduction/Creating-text
 */

{
  const div = document.createElement('div');
  div.id = 'info';
  div.textContent = 'Description';
  Object.assign(div.style, {
    position: 'absolute',
    top: '10px',
    width: '100%',
    textAlign: 'center',
    zIndex: 100,
    display: 'block'
  });
  document.body.appendChild(div);
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcfcfcf);

const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.set(0, 100, 150);

const ambient = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambient);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/examples/js/libs/draco/');
loader.setDRACOLoader(dracoLoader);

loader.load(
  './gltf/pony_cartoon/scene.gltf',
  gltf => {
    scene.add(gltf.scene);
  },
  xhr => {
    console.log(xhr.loaded / xhr.total)
  },
  error => {
    console.log('110');
    console.error(error);
  })