import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Brush() {
  const { nodes, materials } = useGLTF('/brush.glb');

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MANIFOLD_SOLID_BREP_311003.geometry}
        material={materials.手柄}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MANIFOLD_SOLID_BREP_311003_1.geometry}
        material={materials.齿}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MANIFOLD_SOLID_BREP_311003_2.geometry}
        material={materials.深黑色磨砂}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MANIFOLD_SOLID_BREP_311003_3.geometry}
        material={materials.黑色磨砂}
      />
    </>
  );
}

useGLTF.preload('/brush.glb');
