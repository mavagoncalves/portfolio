// Panel
function showPanel(title, content) {
  document.getElementById('panelTitle').innerText = title;
  document.getElementById('panelContent').innerHTML = content;
  document.getElementById('infoPanel').classList.remove('hidden');
}

function hidePanel() {
  document.getElementById('infoPanel').classList.add('hidden');
}


// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-3, 3, 4);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
});
renderer.setClearColor()




// Lights
const light = new THREE.HemisphereLight(0xffffff, 0x444444);
light.position.set(10,30, 0);
scene.add(light);


// Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;
controls.minDistance = 0.5;
controls.maxDistance = 20;

controls.target.set(2, 0, -2);
controls.update();


// Grid
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);


// LoadModels reusable function
const loader = new THREE.GLTFLoader();
const clickableObjects = []; // clickable items

function loadModel(name, path, position, rotation = null, scale = null, isClickable = false) {
  loader.load(path, (gltf) => {
    const model = gltf.scene;
    model.name = name;
    model.position.copy(position);

    if (rotation) model.rotation.set(rotation.x, rotation.y, rotation.z);
    if (scale) model.scale.set(scale.x, scale.y, scale.z);

    scene.add(model);
    if (isClickable) clickableObjects.push(model);
  });
}


// Room

// Floor
loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(0, 0, -3),null,new THREE.Vector3(2, 2, 2));
loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(1.9, 0, -3),null,new THREE.Vector3(2, 2, 2));
loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(-2, 0, -3),null,new THREE.Vector3(2, 2, 2));
loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(1.9, 0, -1),null,new THREE.Vector3(2, 2, 2));
loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(0, 0, -1),null,new THREE.Vector3(2, 2, 2));
loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(-2, 0, -1),null,new THREE.Vector3(2, 2, 2));
loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(1.9, 0, 1),null,new THREE.Vector3(2, 2, 2));
loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(0, 0, 1),null,new THREE.Vector3(2, 2, 2));
loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(-2, 0, 1),null,new THREE.Vector3(2, 2, 2));

// Walls
loadModel('WallBack', 'assets/objects/wall.glb', new THREE.Vector3(0, 0, -5),null,new THREE.Vector3(2, 2, 2));
////loadModel('WallBack', 'assets/objects/wall.glb', new THREE.Vector3(-2, 0, -5),null,new THREE.Vector3(2, 2, 2));
loadModel('WallBack', 'assets/objects/wall.glb', new THREE.Vector3(2, 0, -5),null,new THREE.Vector3(2, 2, 2));
loadModel('WallBack', 'assets/objects/wall.glb', new THREE.Vector3(3.9, 0, -5),new THREE.Vector3(0,Math.PI+ Math.PI/2, 0),new THREE.Vector3(2, 2, 2)); 
loadModel('WallBack', 'assets/objects/wall.glb', new THREE.Vector3(3.9, 0, -1),new THREE.Vector3(0, Math.PI+ Math.PI/2, 0),new THREE.Vector3(2, 2, 2));
////loadModel('WallBack', 'assets/objects/wall.glb', new THREE.Vector3(4, 0, 1),new THREE.Vector3(0, Math.PI / 2, 0),new THREE.Vector3(2, 2, 2));

loadModel('Doorway', 'assets/objects/wallDoorway.glb', new THREE.Vector3(-2, 0, -5),null,new THREE.Vector3(2, 2, 2));
loadModel('Doorway', 'assets/objects/doorway.glb', new THREE.Vector3(-1.5, 0, -4.9),null,new THREE.Vector3(2, 2, 2));
loadModel('Window1', 'assets/objects/wallWindowSlide.glb', new THREE.Vector3(3.9, 0, -3),new THREE.Vector3(0, Math.PI+ Math.PI/2, 0),new THREE.Vector3(2, 2, 2));


// Objects
loadModel('Computer', 'assets/objects/Computer.glb', new THREE.Vector3(2.25, 1.06, -4.5), null,new THREE.Vector3(0.0015,0.0015,0.0015), true);
loadModel('Book', 'assets/objects/Book Stack.glb', new THREE.Vector3(3.4, 1.22, -3), null, new THREE.Vector3(0.5,0.5,0.5), true);
loadModel('Bed', 'assets/objects/bedSingle.glb', new THREE.Vector3(1, 0.1, -1.7), new THREE.Vector3(0, Math.PI + Math.PI/2, 0), new THREE.Vector3(2.5,2.5,2.5), true);
loadModel('Desk', 'assets/objects/deskCorner.glb', new THREE.Vector3(1.5, 0.1, -2.5), null, new THREE.Vector3(2.5,2.5,2.5), true);
loadModel('Bedside', 'assets/objects/cabinetBedDrawer.glb', new THREE.Vector3(3.3, 0.1, -1.45), new THREE.Vector3(0, Math.PI+ Math.PI/2, 0), new THREE.Vector3(2.5,2.5,2.5), true);
loadModel('floorLamp', 'assets/objects/lampRoundFloor.glb', new THREE.Vector3(-0.2,0.1,-4.45 ), null, new THREE.Vector3(2.5,2.5,2.5), true);
loadModel('Bookcase', 'assets/objects/bookcaseOpen.glb', new THREE.Vector3(0.3, 0.1, -4.3), null, new THREE.Vector3(2.5,2.5,2.5), true);
loadModel('Deskchair', 'assets/objects/chairDesk.glb', new THREE.Vector3(2.7, 0.1, -3.9), new THREE.Vector3(0,Math.PI,0), new THREE.Vector3(2.5,2.5,2.5), true);
loadModel('Ruground', 'assets/objects/rugRound.glb', new THREE.Vector3(-1.8, 0.1, -0.6), null, new THREE.Vector3(4,4,4), true);
loadModel('Plantpot', 'assets/objects/pottedPlant.glb', new THREE.Vector3(3.6, 1, -4.6), null, new THREE.Vector3(1.5,1.5,1.5), true);
// Raycaster -->  handle clicks
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(clickableObjects, true);

  if (intersects.length > 0) {
    const root = intersects[0].object.parent;

    switch (root.name) {
      case 'Computer':
        showPanel("Projects", "My games, and GitHub links.");
        break;
      case 'Book':
        showPanel("Education", "Studying Software Development at Kristianstad University.");
        break;
    }
  }
});


// Animations
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

