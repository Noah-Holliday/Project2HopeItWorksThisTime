import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Grass({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/Models/grass.glb')
    return (
      <group position={[0,-2.5,0]} ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.grass.geometry} material={materials.foliage} scale={0.75} />
      </group>
    )
}