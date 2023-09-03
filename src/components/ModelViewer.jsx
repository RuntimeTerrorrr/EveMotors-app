import React, { Suspense } from 'react';
import { Canvas, useThree, extend, useFrame } from 'react-three-fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const ModelViewer = ({modelUrl}) => {

  return (
    <Canvas
      camera={{ position: [0, 2, 5] }}
      style={{ width: 'auto', height: '100vh' }}
    >
      <ambientLight />
      <directionalLight intensity={2} position={[0, 40, -10]} />
      <directionalLight intensity={2} position={[0, -40, -10]} />
      <directionalLight intensity={2} position={[40, -40, -10]} />
      <directionalLight intensity={2} position={[-40, 40, -10]} />
      <pointLight intensity={1} position={[10, 40, 0]} />

      <Controls enableZoom={false}  /> {/* Set the target */}
      <Suspense fallback={null}>
        <Model url={modelUrl} scale={.5} target={[1, 0, 1.5]}/>
      </Suspense>
    </Canvas>
  );
};

const Controls = ({ enableZoom, target }) => { // Pass target as a prop
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
