import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import v1 from "../video/video2.mov"
import v2 from "../video/iPhone 14 Pro _ Chase _ Apple.mp4"
import a1 from "../Images/IMG_0105.jpg"
import a2 from "../Images/IMG_0142.jpg"
import a3 from "../Images/IMG_8320.jpg"
import a4 from "../Images/IMG_9267.jpg"

// import a1 from "../Images/IMG_0105.jpg"

import { gsap } from 'gsap';

const Section = styled.section`
width: 100vw;
position: relative;
z-index: 1;
background-color: var(--white);
overflow: hidden;
min-height: 100vh;
`
const Image = styled.img`
  position: absolute;
  width: 10%;
  height: auto;
  z-index: 0;
`;

const TopLeftImage = styled(Image)`
  top: 0;
  left:0;
  transform: translate(50%,50%);
`;

const TopRightImage = styled(Image)`
  top: 0;
  right: 0;
  transform: translate(-50%,50%);
`;

const BottomLeftImage = styled(Image)`
  bottom: 0;
  left: 0;
  transform: translate(50%,-50%);
`;

const BottomRightImage = styled(Image)`
  bottom:0;
  width: 10%;
  right: 0;
  transform: translate(-50%,-10%);
`;

// const Center = styled(Image)`
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 50%;
// `

const V1 = styled.video`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
object-fit: cover;
object-position: bottom;
z-index: 2;
`
const V2 = styled.video`
position: absolute;
top: 0;
right: 40%;
width: 60%;
height: 1auto;
z-index: 1;
@media screen and (max-width:30em){
      width: 100%;
      right: 0;
      top: 10%;

    }
`
const TitleContainer = styled.div`
width: 50%;
height: 50%;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: 0;
right: 0;

@media screen and (max-width:48em){
      top: 60%;
      right: 2rem;
    }
    @media screen and (max-width:40em){

      right: 5rem;
    }
    @media screen and (max-width:30em){
      top: 70%;
      right: 40%;
    }
`
const Title = styled.h1`
font-size: var(--fontBig);
z-index: 6;
text-transform: capitalize;
background-image: linear-gradient(-45deg,var(--gradient));
    background-clip: text;
    -webkit-background-clip:text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width:70em){
      font-size: var(--fontxxxl);
    }
    @media screen and (max-width:48em){
      font-size: var(--fontxxl);
    }

`
const CameraSection = () => {
    const sectionRef = useRef(null);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const image1 = useRef(null);
    const image2 = useRef(null);
    const image3 = useRef(null);
    const image4 = useRef(null);
    const TitleRef = useRef(null);



    useLayoutEffect(() => {
        const elem = sectionRef.current;
        const b1 = videoRef1.current;
        const b2 = videoRef2.current;
        const k1 = image1.current;
        const k2 = image2.current;
        const k3 = image3.current;
        const k4 = image4.current;

        let elements = gsap.utils.selector(TitleRef);

        
        gsap.to(elem,{
            scrollTrigger:{
                trigger:elem,
                start:"top top",
                end:`bottom+=500 bottom`,
                scrub:true,
                pin:true,
                pinSpacing:true,
            }
        })
        let t2 = gsap.timeline({
            scrollTrigger:{
                trigger:elem,
                start:"top top",
                end:`bottom bottom-=500`,
                scrub:true,

                // pin:true,
                // pinSpacing:true,
            }
        }).to(b1,{scale:0.3},"1").to(b2,{scale:0.3},"1").to(k1,{scale:2.9},"2").to(k2,{scale:2.9},"3").to(k3,{scale:2.9},"4").to(k4,{scale:2.9},"5")

        elements('h1').forEach((el)=>
            t2.fromTo(
                el,
                {
                    scrollTrigger:{
                    trigger:elem,
                    start:"top top",
                    end:`bottom bottom`,
                    scrub:true,
                    // markers:true,
                    // pin:true,
                    // pinSpacing:true,
                },
                x:100,
                opacity:0,
            },
            {
                x:0,
                opacity:1,
            }
            )
            )

    }, [])

    
   
  return (
    <Section ref={sectionRef}>
        <V1 src={v1}  ref={videoRef1}  type='video/mp4' autoPlay muted loop/>
        
        <V2 src={v2}  ref={videoRef2} type='video/mp4' autoPlay muted loop/>
        <TopLeftImage src={a1} ref={image1} />
      <TopRightImage src={a2} ref={image2} />
      <BottomLeftImage src={a3} ref={image3} />
      <BottomRightImage src={a4} ref={image4}/>
      <TitleContainer ref={TitleRef}>
        <Title>
            Shot On 
        </Title>
        <Title>
             iPhone 14 Pro
        </Title>
        

      </TitleContainer>

        
    </Section>
  )
}

export default CameraSection