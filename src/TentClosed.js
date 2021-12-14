/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Tent({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/tentClosed.glb')
  return (
    <group position={[0,-2.5,0]} ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_tentClosed.geometry} material={materials.wood} />
      <mesh geometry={nodes.Mesh_tentClosed_1.geometry} material={materials.cloth} />
    </group>
  )
}