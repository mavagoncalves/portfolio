import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function createEnvironment() {
  // 1. Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // 2. Camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 2, 5);

  // 3. Renderer
  const canvas = document.getElementById('three-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // 4. Lights (Crucial so your models aren't pure black)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 5);
  scene.add(directionalLight);

  // 5. Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  return { scene, camera, renderer, controls };
}