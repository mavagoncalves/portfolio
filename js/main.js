import { createEnvironment } from './sceneSetup.js';
import { loadRoomModels } from './models.js';
import { setupInteractions } from './interactions.js';

// 1. Set up the Scene
const { scene, camera, renderer, controls } = createEnvironment();

// 2. Load the Models
const clickableObjects = loadRoomModels(scene);

// 3. Set up the Clicks
setupInteractions(camera, clickableObjects);

// 4. Handle Window Resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// 5. Run the Animation Loop
function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Required if damping is enabled
  renderer.render(scene, camera);
}

animate();