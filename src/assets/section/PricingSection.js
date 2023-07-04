import { Canvas } from '@react-three/fiber'
import React, { Suspense, useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Model3 } from '../../components/Scene3'
import { OrbitControls } from '@react-three/drei'
import { ColorContext } from '../../context/ColorContext'

const Container = styled.div`
width: 100vw;
height: 100vh;
position: relative;
z-index: 1;
background-color: var(--white);
overflow: hidden;

`

const Section = styled.div`
width: 100vw;
height: 100vh;
position: relative;
z-index: 1;
background-color: "#F9E5C9";


`
const Phone = styled.div`
width: 100%;
height: 70%;
display: flex;
flex-direction: column;
justify-content: center;
cursor: grab;
align-items: center;
position: relative;
`
const Colors = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
display: flex;
left: 35%;
top: 50%;
transform: translate(-50%,-50%);
@media screen and (max-width:64em){
        left: 10%;
    }
`

const Color = styled.li`
list-style: none;
width: 1.5rem;
height: 1.5rem;
cursor: pointer;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0.5rem 0;
border: 1px solid var(--dark);

`
const Hello = styled.div`
font-size: var(--fontsm);
position: absolute;
top: 1rem;
`

const Details = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Subtitle = styled.h2`
font-size: var(--fontmd);
font-family: var(--fontR);
`
const Title = styled.h2`
font-size: var(--fontxl);
padding: 0.3rem;
`
const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 1rem;
`
// const Btn = styled.button`
// display: flex;
// justify-content: center;
// align-items: center;
// margin: 0;
// padding: 0.4rem 1rem;
// border-radius: 50px;
// border: none;
// outline: none;
// background-color: var(--blue);
// color: var(--white);
// cursor: pointer;
// &:hover{
//     opacity: 0.7;
// }
// `

const BtnLink = styled.a`
color: var(--blue);
text-decoration: none;
margin-left:1.5rem;

&:hover{
    text-decoration: underline;
}
`

const PricingSection = () => {
    const {currentColor,changeColorContext} = useContext(ColorContext)
    const SectionRef = useRef(null);

    let updateColor = (color,text,rgb)=>{
        const colorObj = {
            color,text,rgb
        }

        changeColorContext(colorObj);
        // if(color ==="#574f6f"){
        // materials.TrnkWAfGduLgqLM.color.set("#420075");
        // }
        
        // else
        // materials.TrnkWAfGduLgqLM.color.set(color);

        
        
    }
    useEffect(() => {
        SectionRef.current.style.backgroundColor = `
        rgba(${currentColor.rgb},0.4)
        `
    }, [currentColor])
    
  return (
    <Container>
    <Section ref={SectionRef}>
    <Phone>
            <Hello>360&deg; &#x27F2;</Hello>
        <Canvas camera={{fov:5.8}}>
        <ambientLight intensity={1} />
        <directionalLight intensity={10.4}/>
        
          <Suspense fallback={null}>
            <Model3/>
            </Suspense>
            <OrbitControls enableZoom={false}/>

        </Canvas>

        <Colors>
            <Color color="#F9E5C9"  onClick={()=>updateColor("#F9E5C9", "Gold", "249, 229, 201")}/>
            <Color  color="#574f6f" onClick={()=>updateColor("#574f6f", "Deep Purple", "87, 79, 111")}/>
            <Color color="#C0C0C0" onClick={()=>updateColor("#C0C0C0", "Silver", "192, 192, 192")}/>

        </Colors>
    </Phone>
    <Details>
        <Subtitle>iPhone</Subtitle>
        <Title>14 Pro </Title>
        <Subtitle>₹1,29,900.00</Subtitle>
        <ButtonContainer>

            <BtnLink href='https://www.apple.com/in/shop/buy-iphone/iphone-14-pro'>BUY</BtnLink>
            <BtnLink href="#">Learn More</BtnLink>
        </ButtonContainer>
    </Details>
    </Section>
    </Container>
  )
}

export default PricingSection