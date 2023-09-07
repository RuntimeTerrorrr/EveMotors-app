import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, extend, useThree, useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const ModelViewer = ({ modelUrl,  fixedScale, fixedTarget}) => {
  if (!modelUrl) {
    return (
      <p>No model URL provided.</p>
    );
  } else {
  const [modelDimensions, setModelDimensions] = useState({ width: 1, height: 1, depth: 1 });

  // Load the model and calculate dimensions
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(modelUrl, (gltf) => {
      const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
      const modelWidth = boundingBox.max.x - boundingBox.min.x;
      const modelHeight = boundingBox.max.y - boundingBox.min.y;
      const modelDepth = boundingBox.max.z - boundingBox.min.z;

      // Determine the maximum dimension (width, height, or depth)
      const maxDimension = Math.max(modelWidth, modelHeight, modelDepth);

      // Calculate the desired scale based on the maximum dimension and screen width
      const screenWidth = window.innerWidth;
      const desiredWidth = screenWidth * 0.8; // 80% of screen width
      const scaleFactor = desiredWidth / maxDimension;
      setFixedScale([scaleFactor, scaleFactor, scaleFactor]);

      // Set the target point at the center of the model's bounding box
      const targetX = (boundingBox.max.x + boundingBox.min.x) / 2;
      const targetY = (boundingBox.max.y + boundingBox.min.y) / 2;
      const targetZ = (boundingBox.max.z + boundingBox.min.z) / 2;
      setFixedTarget([targetX, targetY, targetZ]);

      // Store the model's dimensions
      setModelDimensions({ width: modelWidth, height: modelHeight, depth: modelDepth });
    });
  }, [modelUrl]);

  return (
    <Canvas
      camera={{ position: [0, 2, 5] }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <ambientLight />
      <directionalLight intensity={2} position={[0, 40, -10]} />
      <directionalLight intensity={2} position={[0, -40, -10]} />
      <directionalLight intensity={2} position={[40, -40, -10]} />
      <directionalLight intensity={2} position={[-40, 40, -10]} />
      <pointLight intensity={1} position={[10, 40, 0]} />

      <Controls enableZoom={false} target={fixedTarget} />
      <Suspense fallback={null}>
        <Model url={modelUrl} scale={fixedScale} />
      </Suspense>
    </Canvas>
  );
  }
};


const Controls = ({ enableZoom, target }) => {
  const { camera, gl } = useThree();
  const controlsRef = React.useRef();

  useFrame(() => controlsRef.current.update());

  return (
    <orbitControls ref={controlsRef} args={[camera, gl.domElement]} enableZoom={enableZoom} target={target} />
  );
};

const Model = ({ url, scale }) => {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} scale={scale} />;
};

export default ModelViewer;
