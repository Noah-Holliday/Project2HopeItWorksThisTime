import React from "react";
import SurvivalObjects from './items/SurvivalObjects.json'
import Grass from './Grass.js'
import GrassLarge from "./GrassLarge";
import Bedroll from './Bedroll'
import Hoe from './ToolHoe'
import Pickaxe from './ToolPickaxe'
import Axe from './ToolAxe'
import Campfire from './Campfire'
import Tent from './TentClosed'
import Structure from './StructureRoof'
import { Text } from 'troika-three-text'
import { extend } from "react-three-fiber";

//have to extent the Text to make it an identifiable THREE object
extend({ Text });

//function that renders text into the scene using the 'troika-three-text' library
function CreateItemDescription(textToDisplay) {
    return (    
        <text position = {[0, 3, 0]} outlineColor="green" textAlign = "justify" maxWidth = {300} lineHeight = {1} letterSpacing = {0} letterSpacing = {0} anchorX="center" anchorY="top" text = {textToDisplay} font = "Philosopher" fontSize = {.7}> 
            <meshPhongMaterial attach="material" color="#f70cd8" />
        </text>);
}

//really ugly and hacky way to apply the data to the individual models
//originally wanted to do this through the "lazy" library in react, however, since each import is an actually elemenet that we are loading that route was not realistic
export default function Item(props) {
    const ItemToRender = SurvivalObjects.listOfObjectsTypes[props.currentRenderType].Items.map(items => {
        console.log(items.name)
        switch (items.name) {
            case 'Grass':
                return <Grass />
            case 'Bedroll':
                return <Bedroll />
            case 'Large Grass':
                return <GrassLarge />
            case 'Hoe':
                return <Hoe />
            case 'Pickaxe':
                return <Pickaxe />
            case 'Axe':
                return <Axe />
            case 'Tent':
                return <Tent />
            case 'Campfire':
                return <Campfire />
            case 'Structure':
                return <Structure />
            default:
                return <Grass />
    }});

    console.log(ItemToRender)

    //then just render the item based off of the inserted current position and type and also create the text for the item that will be getting shown
    return (
        <group>
            {ItemToRender[props.currentRenderPosition]}
            {CreateItemDescription(
                "Type: " + SurvivalObjects.listOfObjectsTypes[props.currentRenderType].ObjectType + "\n\n" + 
                "Name: " + SurvivalObjects.listOfObjectsTypes[props.currentRenderType].Items[props.currentRenderPosition].name + "\n" +
                "Description: " + SurvivalObjects.listOfObjectsTypes[props.currentRenderType].Items[props.currentRenderPosition].description)}
        </group>
    )
}