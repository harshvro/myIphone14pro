import React ,{useRef,useState} from 'react'
import styled from 'styled-components'
import backgroundVideo from "../video/dynamic2.mp4"
import { FaVolumeUp, FaVolumeMute, FaPlay, FaPause } from 'react-icons/fa';

const Section = styled.section`
width: 100vw;
height: 100vh;
position: relative;
justify-content: center;
align-items: center;
display: flex;
background-color:var(--dark) ;
overflow: hidden;

`
const Title = styled.h1`
position: absolute;
top: 2rem;
left: 2rem;
font-size: var(--fontlg);
font-family: var(--fontL);
color: var(--greyLight);
@media screen and (max-width:48em){
font-size: var(--fontmd);
left: 1rem;
}
@media screen and (max-width:30em){
  width: 70%;
  color: var(--white);
}
`

const TextContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;
background-image: linear-gradient(-45deg,var(--gradient));
    background-clip: text;
    -webkit-background-clip:text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
span{
    font-size: var(--fontxxxl);
    text-transform: uppercase;
    padding: 2rem;
    font-weight: 800;
    @media screen and (max-width:64em){
      padding: 0;
      font-size: var(--fontxxl);
    }
    @media screen and (max-width:48em){
      font-size: var(--fontxl);
    }
}
@media screen and (max-width:48em){
flex-direction: column;
background-image: linear-gradient(90deg,var(--gradient));
align-items: flex-start;
filter: brightness(1.1) contrast(1.1);
&>*:last-child{
  align-self:flex-end ;
}
height: 80vh;
padding: 0 1rem;
}
`
const VideoContainer = styled.div`
width: 100vw;
min-height: 100vh;
position: absolute;
top: 0;
left: 0;
z-index: 0;
video{
    width: 100%;
    height: 100vh;
    object-fit: cover;//this will cover the whole screen
    object-position: bottom;

}
`
const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  
`;
const Button = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 2;
  background: transparent;
  border: none;
  color: var(--greyLight);
  font-size: 1rem;
  cursor: pointer;
  background-image: linear-gradient(-45deg,var(--gradient));
    background-clip: text;
    -webkit-background-clip:text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
`

const HeroSection = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
  
    const toggleMute = () => {
      const video = videoRef.current;
      if (video) {
        video.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    }
    const togglePlay = () => {
      const video = videoRef.current;
      if (video) {
        if (isPlaying) {
          video.pause();
        } else {
          video.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  return (
    <Section>
    
    <VideoContainer>
    <video src={backgroundVideo} ref={videoRef} type='video/mp4' playsInline autoPlay muted loop/>
    </VideoContainer>
        <Title>iPhone 14 Pro</Title>
        <TextContainer>
            <span>PRO.</span>
            <span>BEYOND.</span>
        </TextContainer>
        <Button onClick={toggleMute}>
        <IconWrapper>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </IconWrapper>
        
      </Button>
      <Button style={{ top: '4rem' }} onClick={togglePlay}>
        <IconWrapper>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </IconWrapper>
        
        </Button>
    </Section>
  )
}

export default HeroSection