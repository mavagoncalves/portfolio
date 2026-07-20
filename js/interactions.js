import * as THREE from 'three';

export function setupInteractions(camera, clickableObjects) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  // UI Panel logic
  const infoPanel = document.getElementById('infoPanel');
  const panelTitle = document.getElementById('panelTitle');
  const panelContent = document.getElementById('panelContent');

  function showPanel(title, content) {
    panelTitle.innerText = title;
    panelContent.innerText = content;
    infoPanel.classList.remove('hidden');
  }

  function hidePanel() {
    infoPanel.classList.add('hidden');
  }

  window.hidePanel = hidePanel;

  // Click listener
  window.addEventListener('click', (event) => {
    // Convert mouse position to normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // Check for intersections
    const intersects = raycaster.intersectObjects(clickableObjects, true);

    if (intersects.length > 0) {
      // Get the root group name rather than the specific mesh clicked
      let root = intersects[0].object;
      while (root.parent && root.parent.type !== 'Scene') {
        root = root.parent;
      }

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
}