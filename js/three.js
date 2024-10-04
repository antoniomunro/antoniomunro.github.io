import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);

// Get the canvas container
const container = document.getElementById('canvas-container');
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Set camera initial position
camera.position.z = 5;

// Starfield settings
const starCount = 1000;
const starGeometry = new THREE.BufferGeometry();
const starPositions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount * 3; i += 3) {
    starPositions[i] = (Math.random() - 0.5) * 2000;
    starPositions[i + 1] = (Math.random() - 0.5) * 2000;
    starPositions[i + 2] = (Math.random() - 0.5) * 2000;
}

starGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(starPositions, 3)
);

let starMaterial = new THREE.PointsMaterial({ size: 0.5 });
const starField = new THREE.Points(starGeometry, starMaterial);
scene.add(starField);

let speed = 0.05;

function updateTheme(mode) {
    if (mode === 'dark') {
        starMaterial.color.set(0xffffff); // White stars
        renderer.setClearColor(0x000000); // Black background
    } else {
        starMaterial.color.set(0x444444); // Dark grey stars
        renderer.setClearColor(0xffffff); // White background
    }
}

// Make updateTheme accessible globally
window.updateTheme = updateTheme;

// Call updateTheme initially based on current mode
const bodyClass = document.getElementById('body').className;
updateTheme(bodyClass.includes('dark') ? 'dark' : 'light');

function animate() {
    requestAnimationFrame(animate);
    camera.position.z -= speed;
    starField.rotation.x += 0.0005;
    starField.rotation.y += 0.0005;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

animate();
