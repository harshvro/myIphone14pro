import React from 'react'
import styled, { keyframes } from 'styled-components'
import a16 from "../Images/apple-a16-bionic.jpg"

const Section = styled.section`
width: 100vw;
height: 100vh;
display: flex;
position: relative;
justify-content: flex-start;
align-items: center;
background-color: var(--dark);
color: var(--white);
overflow: hidden;
`

const Title= styled.h1`
width: 100%;
text-align: center;
position: absolute;
bottom: 2rem;
left: 50%;
transform: translateX(-50%);
font-size: var(--fontBig);
font-family: var(--fontL);
background-image: linear-gradient(-45deg,var(--gradient));
    background-clip: text;
    -webkit-background-clip:text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
    @media screen and (max-width:70em){
        font-size: var(--fontxxxl);
    }
    @media screen and (max-width:64em){
        font-size: var(--fontxxl);
    }
    @media screen and (max-width:48em){
        font-size: var(--fontxl);
    }
`
const glow = keyframes`
    0%{
        box-shadow: 1px 1px 10px var(--white);
    }
    50%{
        box-shadow: 2px 2px 25px var(--white);
    }
    100%{
        box-shadow: 1px 1px 10px var(--white);
    }
    `
const Processor = styled.div`
width: 25%;
/* height: 25%; */
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
animation: ${glow} 3s ease infinite;
padding: 0.5rem;
@media screen and (max-width:50em){
    /* display: none; */
    /* animation: ${glow} 3s ease infinite; */
    animation: none;
}


display: flex;
justify-content: center;
align-items: center;
img{
    width: 100%;
    height: auto;
}
@media screen and (max-width:50em){
    /* display: none; */
    img{
        transform: translate(-80%,-0%);
        animation: ${glow} 3s ease infinite;
    }
}

`
const Text = styled.div`
font-size: var(--fontxs);
color: var(--greyLight);
width: 30%;
height: 40vh;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width:64em){
    width: 50%;
}
    @media screen and (max-width:48em){
    width: 100%;
    font-size: var(--fontxxs);
    span{
        width: 40%;
        padding-left: 1rem;
    }
    &>*:last-child{
        align-self: flex-end;
        padding-left: 0;
        padding-right: 1rem;
        text-align: right;
    }

    }

span{
    margin: 0.2rem 0;
    padding-left: 2rem;
}


`



const ProcessorSection = () => {
  return (
    <Section>
        <Title>
            Fastest Processor
        </Title>
        <Processor>
        <img src={a16} alt='processorA16' />
        </Processor>
        <Text>
            <span>
            Apple A16 Bionic - an 6-core chipset that was announced on September 7, 2022, and is manufactured using a 4-nanometer process technology. It has 2 cores Everest at 3460 MHz and 4 cores Sawtooth at 2020 MHz.
            </span>
        </Text>
    </Section>
  )
}

export default ProcessorSection