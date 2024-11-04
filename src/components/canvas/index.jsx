import React from 'react';

import { Canvas } from '@react-three/fiber';

const AppCanvas = ({ children }) => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[0, 2, 3]} />
      <pointLight position={[2, 1.5, 1]} intensity={3} distance={5} decay={0} />
      {children}
    </Canvas>
  );
};

export default AppCanvas;
