import * as THREE from 'three';

// 场景
const scene = new THREE.Scene();
// 透视摄像机(视野角度FOV，长宽比，近截面，远截面)
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建立方体
const geometry = new THREE.BoxGeometry(); // 立方体对象
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 材质
const cube = new THREE.Mesh(geometry, material); // 网格
scene.add(cube); // 物体默认放置在(0,0,0)
camera.position.z = 5;

// 渲染场景
function animate() {
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