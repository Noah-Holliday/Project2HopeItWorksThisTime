import React, { useState, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei"
import Floor from './Floor.js'
import Arrow from './Arrow.js'
import Item from './Item.js'


export default function Scene() {

    //a variable to track the render object type that we are in 
    const [currentRenderType, setCurrentRenderType] = useState(0);
        //a variable to track the render object position within the type that we are in 
    const [currentRenderPosition, setCurrentRenderPosition] = useState(0);

    return (
        //construct a canvas
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
        //The arrows have arrowDirection to allow the arrow component to know the logic that it should apply when considering its on click. It also imports in the current render type and position. Along with the ability to modified them
        //The item component needs to have the current render type and position sent to it, for it to know what items to render.
    )
}