/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import SurvivalObjects from './items/SurvivalObjects.json'

export default function Arrow(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/Arrow.glb')
  return (
    <group ref={group} dispose={null}>
      <mesh {...props} onClick={(e) => {
        console.log(props.arrowDirection)
        console.log(props.currentRenderPosition)
        console.log(props.currentRenderType)
        if(props.arrowDirection === "negative-type" && props.currentRenderType > 0) {
          props.setCurrentRenderPosition(0)
          props.setCurrentRender(props.currentRenderType - 1)
        }
        else if(props.arrowDirection === "positive-type" && props.currentRenderType < (SurvivalObjects.listOfObjectsTypes.length - 1)) {
          props.setCurrentRenderPosition(0)
          props.setCurrentRender(props.currentRenderType + 1)
        }
        else if(props.arrowDirection === "negative-item" && props.currentRenderPosition > 0) {
          props.setCurrentRenderPosition(props.currentRenderPosition - 1)
        }
        else if(props.arrowDirection === "positive-item" && props.currentRenderPosition < (SurvivalObjects.listOfObjectsTypes[props.currentRenderType].Items.length - 1)) {
          props.setCurrentRenderPosition(props.currentRenderPosition + 1)
        }
        else {
          console.log("Invalid Input, no more items in that direction.")
        }
        }}geometry={nodes.Plane.geometry} material={nodes.Plane.material} />
    </group>
  )
}

