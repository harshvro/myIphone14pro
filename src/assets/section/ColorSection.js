import React, { Suspense, useContext, useEffect, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'


import { Canvas } from '@react-three/fiber'
import { Model2 } from '../../components/Scene2'
import { ColorContext } from '../../context/ColorContext'

const Section = styled.section`
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;

`

const Left = styled.div`
width: 50%;
height: 100%;
display: flex;
background-color: rgba(155, 181, 206,0.8);
position: relative;
@media screen and (max-width:48em){
        width: 100%;
    }


`
const Right = styled.div`
width: 50%;
height: 100%;
display: flex;
background-color: rgba(155, 181, 206,0.4);/*0.4 opacity*/
position: relative;
@media screen and (max-width:48em){
    display: none;
    }


`
const Center = styled.div`
width: 100%;
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%)rotate(-90deg);
font-size: var(--fontxxl);
text-transform: uppercase;
filter: brightness(0.6);
@media screen and (max-width:48em){
    top: 2rem;
    transform: translate(-50%,0%)rotate(0deg);
    }
`


const ColorSection = () => {
    const {currentColor,changeColorContext} = useContext(ColorContext);

    useEffect(() => {
        let leftElem = leftRef.current;
        let rightElem = rightRef.current;
        let textElem = textRef.current;
        textElem.innerText = currentColor.text;
        textElem.style.color = currentColor.color;
        rightElem.style.backgroundColor = `rgba(${currentColor.rgbColor},0.4)`;
        leftElem.style.backgroundColor = `rgba(${currentColor.rgbColor},0.8)`;
    
    
    }, [currentColor])
    

    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        let elem = sectionRef.current;
        
        
        let updateColor = (color,text,rgbColor)=>{
            const colorObj = {
                color,text,rgbColor
            }
    
            changeColorContext(colorObj);

            
            // if(color ==="#574f6f"){
            // materials.TrnkWAfGduLgqLM.color.set("#420075");
            // }
            
            // else
            // materials.TrnkWAfGduLgqLM.color.set(color);

            
        }

        gsap.to(elem,{
            scrollTrigger:{
                trigger:elem,
                start:"top top",
                end:`+=${elem.offsetWidth+1000}`,
                scrub:true,
                pin:true,
                pinSpacing:true,
            }
        })
        let t2 = gsap.timeline({
            scrollTrigger:{
                trigger:elem,
                start:"top top",
                end:`+=${elem.offsetWidth+1000}`,
                scrub:true,
                // pin:true,
            }
        }).to(
            elem,
            {
                onStart:updateColor,
                onStartParams:["#F9E5C9", "Gold", "249, 229, 201"],
                onReverseComplete:updateColor,
                onReverseCompleteParams:["#F9E5C9", "Gold", "249, 229, 201"],
            }
        ).to(
            elem,
            {
                onStart:updateColor,
                onStartParams:["#420075", "Deep Purple", "87, 79, 111"],
                onReverseComplete:updateColor,
                onReverseCompleteParams:["#420075", "Deep Purple", "87, 79, 111"],
            }
        
        ).to(
            elem,
            {
                onStart:updateColor,
                onStartParams:["#C0C0C0", "Silver", "192, 192, 192"],
                onReverseComplete:updateColor,
                onReverseCompleteParams:["#C0C0C0", "Silver", "192, 192, 192"],
            }
        )
    
    }, [])
  return (
        <Section ref={sectionRef}>
            <Left ref={leftRef}/>
            <Center ref={textRef}/>
                
            
            <Right ref={rightRef}>
            <Canvas camera={{fov:2.5}}>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={10.4}/>
        
          <Suspense fallback={null}>
            <Model2/>
            </Suspense>

        </Canvas>
            </Right>
        </Section>
  )
}

export default ColorSection