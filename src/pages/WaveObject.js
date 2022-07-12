
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from '../pages/Wave';
import { OrbitControls } from '@react-three/drei';

export default function WaveObject() {
   return (

      <Canvas
         camera={{ position: [-1, 0, 4.25], fov: 13 }}

      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <group position={[0, -1.5, 0]}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        </group>
        <OrbitControls
         minPolarAngle = {Math.PI/2}
         maxPolarAngle = {Math.PI/2}
         enableZoom = {false}
         enablePan = {false}

        />
      </Canvas>
   );
}