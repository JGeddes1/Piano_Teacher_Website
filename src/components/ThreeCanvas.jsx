import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const ThreeCanvas = () => {
  const canvasRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a 3D music note (a sphere for simplicity)
    const noteGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const noteMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const note = new THREE.Mesh(noteGeometry, noteMaterial);
    note.position.set(0, 0, -10); // Position the note at the start
    scene.add(note);

    // Create the "About" section (a green box)
    const aboutGeometry = new THREE.BoxGeometry(2, 2, 2);
    const aboutMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const aboutSection = new THREE.Mesh(aboutGeometry, aboutMaterial);
    aboutSection.position.set(0, 0, -30); // Set "About" further down the z-axis
    scene.add(aboutSection);

    // Set the initial camera position
    camera.position.z = 5;

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Scroll event handler
    const handleScroll = () => {
      // Calculate the scroll progress from the scroll position
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollY / docHeight;

      // Update scroll progress (camera position)
      setScrollProgress(scrollPercentage);

      // Move the camera based on scroll progress
      const newCameraZ = 5 - scrollPercentage * 30; // Move camera from z=5 to z=-25 as the user scrolls
      camera.position.z = newCameraZ;

      // Update note position based on scroll
      const noteZ = -10 - scrollPercentage * 20; // Move the note away as the user scrolls
      note.position.z = noteZ;

      // Update rendering
      renderer.render(scene, camera);
    };

    window.addEventListener("scroll", handleScroll);

    // Start the animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-screen" />;
};

export default ThreeCanvas;
