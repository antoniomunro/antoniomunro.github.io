import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';
import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.2/index.js';

let scene, camera, renderer;
let pixels = [];
let lastHoveredPixel = null;
const pixelSize = 4;
const mouse = new THREE.Vector2();
const container = document.getElementById('canvas-container');
let isLightMode = false;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

camera.position.z = 50;
renderer.setClearColor(0x000000, 0);

function createTransparentPixelGrid() {
    pixels.forEach(pixel => scene.remove(pixel.mesh));
    pixels = [];

    const width = window.innerWidth;
    const height = window.innerHeight;
    const numColumns = Math.floor(width / pixelSize);
    const numRows = Math.floor(height / pixelSize);
    const offsetX = (numColumns * pixelSize) / 2;
    const offsetY = (numRows * pixelSize) / 2;

    for (let x = 0; x < numColumns; x++) {
        for (let y = 0; y < numRows; y++) {
            const geometry = new THREE.PlaneGeometry(pixelSize, pixelSize);
            const material = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.05,
            });
            const plane = new THREE.Mesh(geometry, material);
            plane.position.set(x * pixelSize - offsetX, y * pixelSize - offsetY, -5);
            scene.add(plane);
            pixels.push({ mesh: plane, x, y });
        }
    }
}

function onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);

    createTransparentPixelGrid();
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(pixels.map(p => p.mesh));

    if (intersects.length > 0) {
        const intersectedPixel = intersects[0].object;

        if (lastHoveredPixel !== intersectedPixel) {
            lastHoveredPixel = intersectedPixel;

            const pixelObject = pixels.find(p => p.mesh === intersectedPixel);
            if (pixelObject) {
                transformNearbyPixels(pixelObject);
            }
        }
    }
}

function transformNearbyPixels(pixel) {
    const nearbyPixels = pixels.filter(p => {
        const dx = p.x - pixel.x;
        const dy = p.y - pixel.y;
        return dx * dx + dy * dy <= 16;
    });

    const numTransforms = Math.floor(Math.random() * 3) + 3;
    const selectedPixels = nearbyPixels
        .sort(() => 0.5 - Math.random())
        .slice(0, numTransforms);

    selectedPixels.forEach(p => {
        const scaleDirection = Math.random();
        const targetScaleX = scaleDirection < 0.33 ? 1.5 : 1;
        const targetScaleY = scaleDirection >= 0.33 && scaleDirection < 0.66 ? 1.5 : 1;

        const targetColor = isLightMode ? 0x444444 : 0xffffff;

        gsap.to(p.mesh.scale, {
            x: targetScaleX,
            y: targetScaleY,
            duration: 0.6,
            ease: "power2.out",
            onStart: () => {
                p.mesh.material.color.setHex(targetColor);
            },
            onComplete: () => {
                gsap.to(p.mesh.scale, {
                    x: 1,
                    y: 1,
                    duration: 0.6,
                    ease: "power2.in"
                });
                p.mesh.material.color.setHex(0xffffff);
            }
        });
    });
}

window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('resize', onResize, false);

function updateTheme(mode) {
    isLightMode = mode === 'light';
    if (isLightMode) {
        renderer.setClearColor(0xffffff, 0);
    } else {
        renderer.setClearColor(0x000000, 0);
    }
}

window.updateTheme = updateTheme;
const bodyClass = document.getElementById('body').className;
updateTheme(bodyClass.includes('dark') ? 'dark' : 'light');

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

createTransparentPixelGrid();
animate();
