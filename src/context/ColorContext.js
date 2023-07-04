import { useGLTF } from "@react-three/drei";
import { createContext, useState } from "react";

export const ColorContext = createContext({});

export const ColorContextProvider = ({children})=>{
    const {  materials } = useGLTF('/scene-transformed.glb');
    const [currentColor,setCurrentColor] = useState({
        color:"#F9E5C9",
        text:"Gold",
        rgbColor:"249, 229, 201",
    }) 
    let changeColorContext = (colorObj)=>{

        materials.TrnkWAfGduLgqLM.color.set(colorObj.color);
        setCurrentColor(colorObj);
        
        

       
    }

    return (
        <ColorContext.Provider value={{currentColor,changeColorContext}}>
            {children}
        </ColorContext.Provider>
    )
}