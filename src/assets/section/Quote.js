import React, { useLayoutEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Section = styled.section`
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: center;
align-items: center;

`

const TextContainer = styled.div`
width: 100vw;
height: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: var(--dark);
color: var(--white);
`
// 100%: This specifies the keyframe at which the animation is fully applied. In this case, it represents 100% of the animation duration.
// { transform: translateY(0); }: This CSS rule is defined within the keyframe. It specifies the CSS properties and values to be applied when the animation reaches the specified keyframe (in this case, at 100%). The transform property is used to apply a transformation to the element, specifically a translation along the y-axis using the translateY() function. In this case, translateY(0) means there is no vertical translation, so the element remains in its initial position.
const moveUp = keyframes`
100%{
    transform: translateY(0);
}
`

const Text = styled.p`
width: 50%;
font-size: var(--fontlg);
position: relative;
height: var(--fontmd);
overflow: hidden;
span{

    position: absolute;
    transform: translateY(3rem);
    animation-name:${moveUp};
    animation-duration: 2.5s;
    animation-delay: ${props=>props.delay};
    animation-timing-function: ease;
    animation-fill-mode:forwards;
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg,var(--gradient));
    background-clip: text;
    -webkit-background-clip:text;
    -webkit-text-fill-color: transparent;
}
.author{
    width: 100%;
    text-align: end;
    background-image: linear-gradient(-176deg,var(--gradient));
}

@media screen and (max-width:70em){
  width: 70%;
}
@media screen and (max-width:48em){
  font-size: var(--fontmd);
  height: var(--fontsm);
}
@media screen and (max-width:40em){
  width: 90%;
}
@media screen and (max-width:30em){
  font-size: var(--fontxs);
  
}


`
/* 

transform: translateY(3rem);: This rule applies a vertical translation to the element, moving it 3rem (3 times the size of the root element's font) upwards or downwards on the y-axis.

animation-name: ${moveUp};: This rule specifies the name of the animation to be applied to the element. The value of ${moveUp} refers to the @keyframes rule named "moveUp" that we explained earlier.

animation-duration: 2.5s;: This rule sets the duration of the animation to 2.5 seconds. It determines how long it takes for the animation to complete one cycle.

animation-timing-function: ease;: This rule specifies the timing function for the animation, which determines the acceleration and deceleration of the animation over its duration. In this case, "ease" is used, which provides a smooth transition.

animation-fill-mode: forwards;: This rule specifies the fill mode of the animation. When the animation ends, the element will retain the computed values from the last keyframe, effectively keeping the state of the animation.

background-image: linear-gradient(-45deg, var(--gradient));: This rule sets the background image of the element to a linear gradient. The gradient is defined by the linear-gradient function, with a direction of -45 degrees and a color defined by the CSS variable --gradient.

background-clip: text;: This rule specifies that the background image should be clipped to the text content of the element, resulting in the gradient only being visible within the text.

-webkit-background-clip: text;: This rule is specific to the WebKit rendering engine (used by browsers like Safari and Chrome) and applies the same background clipping effect to the text.

-webkit-text-fill-color: transparent;: This rule sets the text color to transparent, making the actual text content of the element invisible. Only the background image (gradient) will be visible within the text area. */





const Quote = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    let elem = sectionRef.current;

    let trigger = ScrollTrigger.create({
      trigger: elem,
      start: "top top",
      pin:true,
      pinSpacing:false,
    });
  
    return ()=>{
      if (trigger) {
        trigger.kill();
      }
    }
  }, [])
  return (
    <Section ref={sectionRef}>
        <TextContainer>
        {/* People think focus means saying yes to the thing you've got to focus on. It means saying no to the hundred other good ideas that there are. You have to pick carefully */}
        <Text delay = {"0.1s"}><span>&#9733;&nbsp; People think focus means saying yes to the</span></Text>
        <Text delay = {"0.4s"} ><span>&nbsp;&nbsp; &nbsp; &nbsp;  thing you've got to focus on.It means saying </span></Text>
        <Text delay = {"0.6s"}><span> &nbsp;&nbsp; &nbsp; &nbsp;  no to the hundred other good ideas</span></Text>
        <Text delay = {"0.8s"} ><span> &nbsp;&nbsp; &nbsp; &nbsp; that there are. You have to pick carefully&nbsp;&#9733;  </span></Text>
        <Text delay = {"1s"}><span className='author'>&#x23AF;Steve Jobs</span></Text>


        </TextContainer>
    </Section>
  )
}

export default Quote