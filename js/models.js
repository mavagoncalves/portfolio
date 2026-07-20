import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadRoomModels(scene) {
  const loader = new GLTFLoader();
  const clickableObjects = [];

  // Reusable function to load, position, and scale models
  function loadModel(name, path, position, rotation, scale, isClickable = false) {
    loader.load(path, (gltf) => {
      const model = gltf.scene;
      model.name = name;

      if (position) model.position.copy(position);
      if (rotation) model.rotation.set(rotation.x, rotation.y, rotation.z);
      if (scale) model.scale.copy(scale);

      scene.add(model);

      if (isClickable) {
        clickableObjects.push(model);
      }
    }, undefined, (error) => {
      console.error(`Error loading ${name}:`, error);
    });
  }

  // Floors
  loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(0, 0, -3), null, new THREE.Vector3(2, 2, 2));
  loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(1.9, 0, -3), null, new THREE.Vector3(2, 2, 2));
  loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(-2, 0, -3), null, new THREE.Vector3(2, 2, 2));
  loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(1.9, 0, -1), null, new THREE.Vector3(2, 2, 2));
  loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(0, 0, -1), null, new THREE.Vector3(2, 2, 2));
  loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(-2, 0, -1), null, new THREE.Vector3(2, 2, 2));
  loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(1.9, 0, 1), null, new THREE.Vector3(2, 2, 2));
  loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(0, 0, 1), null, new THREE.Vector3(2, 2, 2));
  loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(-2, 0, 1), null, new THREE.Vector3(2, 2, 2));

  // Walls
  loadModel('WallBack', 'assets/objects/wall.glb', new THREE.Vector3(0, 0, -5), null, new THREE.Vector3(2, 2, 2));
  loadModel('WallBack', 'assets/objects/wall.glb', new THREE.Vector3(2, 0, -5), null, new THREE.Vector3(2, 2, 2));
  loadModel('WallBack', 'assets/objects/wall.glb', new THREE.Vector3(3.9, 0, -5), new THREE.Vector3(0, Math.PI + Math.PI/2, 0), new THREE.Vector3(2, 2, 2)); 
  loadModel('WallBack', 'assets/objects/wall.glb', new THREE.Vector3(3.9, 0, -1), new THREE.Vector3(0, Math.PI + Math.PI/2, 0), new THREE.Vector3(2, 2, 2));
  loadModel('Doorway', 'assets/objects/wallDoorway.glb', new THREE.Vector3(-2, 0, -5), null, new THREE.Vector3(2, 2, 2));
  loadModel('Doorway', 'assets/objects/doorway.glb', new THREE.Vector3(-1.5, 0, -4.9), null, new THREE.Vector3(2, 2, 2));
  loadModel('Window1', 'assets/objects/wallWindowSlide.glb', new THREE.Vector3(3.9, 0, -3), new THREE.Vector3(0, Math.PI + Math.PI/2, 0), new THREE.Vector3(2, 2, 2));

  // Objects (Notice the 'true' at the end makes them clickable)
  loadModel('Computer', 'assets/objects/Computer.glb', new THREE.Vector3(2.25, 1.06, -4.5), null, new THREE.Vector3(0.0015, 0.0015, 0.0015), true);
  loadModel('Book', 'assets/objects/Book Stack.glb', new THREE.Vector3(3.4, 1.22, -3), null, new THREE.Vector3(0.5, 0.5, 0.5), true);
  loadModel('Bed', 'assets/objects/bedSingle.glb', new THREE.Vector3(1, 0.1, -1.7), new THREE.Vector3(0, Math.PI + Math.PI/2, 0), new THREE.Vector3(2.5, 2.5, 2.5), false);
  loadModel('Desk', 'assets/objects/deskCorner.glb', new THREE.Vector3(1.5, 0.1, -2.5), null, new THREE.Vector3(2.5, 2.5, 2.5), false);
  loadModel('Bedside', 'assets/objects/cabinetBedDrawer.glb', new THREE.Vector3(3.3, 0.1, -1.45), new THREE.Vector3(0, Math.PI + Math.PI/2, 0), new THREE.Vector3(2.5, 2.5, 2.5), false);
  loadModel('floorLamp', 'assets/objects/lampRoundFloor.glb', new THREE.Vector3(-0.2, 0.1, -4.45), null, new THREE.Vector3(2.5, 2.5, 2.5), false);
  loadModel('Bookcase', 'assets/objects/bookcaseOpen.glb', new THREE.Vector3(0.3, 0.1, -4.3), null, new THREE.Vector3(2.5, 2.5, 2.5), false);
  loadModel('Deskchair', 'assets/objects/chairDesk.glb', new THREE.Vector3(2.7, 0.1, -3.9), new THREE.Vector3(0, Math.PI, 0), new THREE.Vector3(2.5, 2.5, 2.5), false);
  loadModel('Ruground', 'assets/objects/rugRound.glb', new THREE.Vector3(-1.8, 0.1, -0.6), null, new THREE.Vector3(4, 4, 4), false);
  loadModel('Plantpot', 'assets/objects/pottedPlant.glb', new THREE.Vector3(3.6, 1, -4.6), null, new THREE.Vector3(1.5, 1.5, 1.5), false);

  return clickableObjects;
}