import React, { useState, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei"
import Floor from './Floor.js'
import Arrow from './Arrow.js'
import Item from './Item.js'


export default function Scene() {
    const [currentRenderType, setCurrentRenderType] = useState(0);
    const [currentRenderPosition, setCurrentRenderPosition] = useState(0);

    return (
        <Canvas style={{ background: "#171717" }}>
            <OrbitControls />
            <Stars />
            <ambientLight intensity={0.5} />
            <spotLight position={10,15,10} angle={0.3} />
            <Suspense fallback={null}>
                <Arrow arrowDirection="negative-type" setCurrentRenderPosition={setCurrentRenderPosition} currentRenderPosition={currentRenderPosition} setCurrentRender={setCurrentRenderType} currentRenderType={currentRenderType} scale={0.5} position={[-7, -1.5, 0]} rotation={[-Math.PI/2, -Math.PI, 0]} />
                <Arrow arrowDirection="negative-item" setCurrentRenderPosition={setCurrentRenderPosition} currentRenderPosition={currentRenderPosition} setCurrentRender={setCurrentRenderType} currentRenderType={currentRenderType} scale={0.3} position={[-4.5, -1.5, 0]} rotation={[Math.PI/2, -Math.PI/2, 0]} />
                <Item currentRenderType={currentRenderType} currentRenderPosition={currentRenderPosition}/>
                <Arrow arrowDirection="positive-item" setCurrentRenderPosition={setCurrentRenderPosition} currentRenderPosition={currentRenderPosition} setCurrentRender={setCurrentRenderType} currentRenderType={currentRenderType} scale={0.3} position={[4.5, -1.5, 0]} rotation={[Math.PI/2, Math.PI/2, 0]} />
                <Arrow arrowDirection="positive-type" setCurrentRenderPosition={setCurrentRenderPosition} currentRenderPosition={currentRenderPosition} setCurrentRender={setCurrentRenderType} currentRenderType={currentRenderType} scale={0.5} position={[7, -1.5, 0]} rotation={[-Math.PI/2, 0, 0]} />
                <Floor />
            </Suspense>
        </Canvas>
    )
}