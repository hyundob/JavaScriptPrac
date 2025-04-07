// Three.js 기반 3D 공 튕기기 예제
import * as THREE from 'three';

const NBALL = 200;
const RADIUS = 1;
const SPEED_MIN = 0.5;
const SPEED_MAX = 2.0;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

const wallSize = 20;
const wall = {
    left: -wallSize, right: wallSize,
    top: wallSize, bottom: -wallSize,
    front: wallSize, back: -wallSize
};

class Ball {
    mesh: THREE.Mesh;
    velocity: THREE.Vector3;

    constructor() {
        const geometry = new THREE.SphereGeometry(RADIUS, 16, 16);
        const color = new THREE.Color(Math.random(), Math.random(), Math.random());
        const material = new THREE.MeshStandardMaterial({ color });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.set(0, 0, 0);

        const speed = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        this.velocity = new THREE.Vector3(
            speed * Math.sin(phi) * Math.cos(theta),
            speed * Math.sin(phi) * Math.sin(theta),
            speed * Math.cos(phi)
        );
    }

    update() {
        const p = this.mesh.position;

        p.add(this.velocity);

        if (p.x - RADIUS < wall.left || p.x + RADIUS > wall.right) {
            this.velocity.x *= -1;
        }
        if (p.y - RADIUS < wall.bottom || p.y + RADIUS > wall.top) {
            this.velocity.y *= -1;
        }
        if (p.z - RADIUS < wall.back || p.z + RADIUS > wall.front) {
            this.velocity.z *= -1;
        }
    }
}

const balls: Ball[] = [];
for (let i = 0; i < NBALL; i++) {
    const ball = new Ball();
    balls.push(ball);
    scene.add(ball.mesh);
}

camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate);

    balls.forEach(ball => ball.update());

    renderer.render(scene, camera);
}

animate();