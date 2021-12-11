import React, { Suspense, useRef, useState } from "react";

//just a basic function to create a plane for the environment of the scene 
export default function Floor() {
    return (
        <mesh position={[0, -2.5, 0]} rotation={[-Math.PI/2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]}/>
            <meshLambertMaterial attach="material" color='rgb(61, 102, 42)' />
        </mesh>
    );
}