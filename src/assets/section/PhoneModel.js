import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import styled from 'styled-components'
import {  Environment, OrbitControls} from '@react-three/drei'
// import { ModelK } from '../iphone_14_pro_max_silver/Scene'
import { ModelX } from '../../components/Scene'








const Container = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
z-index: 1;

background-color: transparent;

`

const PhoneModel = () => {
  
  return (
    <Container id='phone-model'>
        <Canvas camera={{fov:2.4}}>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4}/>
        {/* <light intensity={1}/>
        a */}
        {/* <ambientLightProbe intensity={}/ > */}
        {/* <rectAreaLight intensity={-0}/> */}
          {/* <pointLight intensity={-0.6}/> */}
          {/* <spotLight intensity={-0.3}/> */}
          <Suspense fallback={null}>
            <ModelX/>
            </Suspense>
            {/* <OrbitControls/> */}
        </Canvas>
    </Container>
  )
}

export default PhoneModel