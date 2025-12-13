'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AnimatedBG() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let material: THREE.ShaderMaterial;
    let mesh: THREE.Mesh;
    let animationId: number;
    let startTime = Date.now();

    const frag = `
      precision highp float;

      vec4 abyssColor = vec4(0.02, 0.02, 0.02, 1.0);
      vec4 tunnelColor = vec4(0.5, 0.5, 0.5, 1.0);

      uniform float time;
      uniform vec2 resolution;

      void main() {
          vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / resolution.y * 0.6;
          float r = length(uv);
          float y = fract(r / 0.005 / (r - 0.01) + time);
          y = smoothstep(0.01, 4.0, y);
          float x = length(uv);
          x = smoothstep(0.5, 0.01, x);
          gl_FragColor = mix(tunnelColor, abyssColor, x) * y;
      }
    `;

    // -------------------------- INIT ----------------------------
    function init() {
      const width = container.clientWidth;
      const height = container.clientHeight;

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10);
      camera.position.z = 1;

      const geometry = new THREE.PlaneGeometry(10, 10);

      material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 1.0 },
          resolution: { value: new THREE.Vector2(width, height) },
        },
        fragmentShader: frag,
      });

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      if (!container.contains(renderer.domElement)) {
        container.appendChild(renderer.domElement);
      }
    }

    // ------------------------ ANIMATE ------------------------
    function animate() {
      animationId = requestAnimationFrame(animate);
      const elapsed = (Date.now() - startTime) / 1000;
      material.uniforms.time.value = elapsed;
      renderer.render(scene, camera);
    }

    // ------------------------ RESIZE ------------------------
    function handleResize() {
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      material.uniforms.resolution.value.set(width, height);
      renderer.setSize(width, height);
    }

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();

      renderer.dispose();
      material.dispose();
      mesh.geometry.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    />
  );
}
