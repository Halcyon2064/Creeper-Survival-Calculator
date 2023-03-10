
import React, { useState } from "react"
import MaterialOptions from "./MaterialOptions"
import './MaterialSelector.css'


let materialSelections ={
    'head':'Diamond',
    'chest':'Diamond',
    'leggings':'Diamond',
    'boots':'Diamond'
}


function MaterialSelector(props){


    const [FilteredMaterial, setMaterial] = useState('Diamond')
    const [FilteredMaterial2, setMaterial2] = useState('Diamond')
    const [FilteredMaterial3, setMaterial3] = useState('Diamond')
    const [FilteredMaterial4, setMaterial4] = useState('Diamond')


    function MaterialEditor(ChosenMaterial, bodyPart){
        if (bodyPart === 'head'){
            materialSelections['head']=ChosenMaterial
        }
        else if (bodyPart === 'chest'){
            materialSelections['chest']=ChosenMaterial
        }
        else if (bodyPart === 'leggings'){
            materialSelections['leggings']=ChosenMaterial
        }
        else if (bodyPart === 'boots'){
            materialSelections['boots']=ChosenMaterial
        }
        // console.log(materialSelections)
    }
   

    function MaterialChangeHandler(ChosenMaterial, bodyPart){
        setMaterial(ChosenMaterial)
        MaterialEditor(ChosenMaterial, bodyPart)    
    }
    function MaterialChangeHandler2(ChosenMaterial, bodyPart){
        setMaterial2(ChosenMaterial)
        MaterialEditor(ChosenMaterial, bodyPart)    
    }
    function MaterialChangeHandler3(ChosenMaterial, bodyPart){
        setMaterial3(ChosenMaterial)
        MaterialEditor(ChosenMaterial, bodyPart)    
    }
    function MaterialChangeHandler4(ChosenMaterial, bodyPart){
        setMaterial4(ChosenMaterial)
        MaterialEditor(ChosenMaterial, bodyPart)    
    }
    


    function MaterialSender(){
        props.materialInfoFetcher(materialSelections)
    }


    return(
        <div className="armor" onChange={MaterialSender}>
            <h1 className="matSelectTitle">Armor material</h1>
            <div className="optWrapper">
            <MaterialOptions chosen={FilteredMaterial} onChoiceChange={MaterialChangeHandler} bodyPart='head'/>
            <MaterialOptions chosen={FilteredMaterial2} onChoiceChange={MaterialChangeHandler2} bodyPart='chest'/>
            <MaterialOptions chosen={FilteredMaterial3} onChoiceChange={MaterialChangeHandler3} bodyPart='leggings'/>
            <MaterialOptions chosen={FilteredMaterial4} onChoiceChange={MaterialChangeHandler4} bodyPart='boots'/>
            </div>
        </div>
       
    )

}


export default MaterialSelector