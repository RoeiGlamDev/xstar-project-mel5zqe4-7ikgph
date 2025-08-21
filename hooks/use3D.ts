import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Custom hook to create and manage 3D interactions for interactive elements.
 * This hook leverages the three.js library to create a modern, luxurious user experience.
 * 
 * @returns {Object} - An object containing the 3D scene, camera, and renderer.
 */
export const use3D = () => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  useEffect(() => {
    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Set background color
    scene.background = new THREE.Color(0x1a1a1a);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0x8b5cf6, 1);
    scene.add(directionalLight);
    
    // Create a 3D model (e.g., a floating sphere)
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x8b5cf6, 
      roughness: 0.3,
      metalness: 0.7
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      sphere.rotation.x += 0.005;
      renderer.render(scene, camera);
    };
    
    animate();

    // Store references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Clean up on unmount
    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);
  
  return {
    scene: sceneRef.current,
    camera: cameraRef.current,
    renderer: rendererRef.current
  };
};