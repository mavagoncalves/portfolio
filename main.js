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
camera.position.set(0, 1.6, 3);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Lights
const light = new THREE.HemisphereLight(0xffffff, 0x444444);
light.position.set(0, 20, 0);
scene.add(light);


// Camera controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
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
loadModel('Floor', 'assets/objects/floorFull.glb', new THREE.Vector3(0, 0, 0));
loadModel('WallBack', 'assets/objects/wall.glb', new THREE.Vector3(0, 0, -1));


// Objects
loadModel('Computer', 'assets/objects/Computer.glb', new THREE.Vector3(0.5, 0, 1), null, null, true);
loadModel('Book', 'assets/objects/Book Stack.glb', new THREE.Vector3(-0.5, 0, 1), null, null, true);


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
  renderer.render(scene, camera);
}
animate();
