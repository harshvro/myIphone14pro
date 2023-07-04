
import React, { useRef,useLayoutEffect } from 'react'
import { useGLTF} from '@react-three/drei'
import { gsap } from 'gsap'

import { useThree } from '@react-three/fiber'
import * as THREE from 'three';







  
  
  
  export function Model2(props) {
    const groupRef = useRef(null);
    const { nodes, materials } = useGLTF('/scene-transformed.glb')
    let camera = useThree(state=>state.camera);
    let scene = useThree(state=>state.scene);
    
    
    useLayoutEffect(() => {
      camera.position.set(-0.03,0.07,2);
      // materials.loFcbeOTkLALGur.color.set("white");
      // materials.qQuBOPmyAtEtTVP.color.set("#F9E5C9");
  
      // materials.yMIYSWPtMTUwNXv.color.multiplyScalar(1.7);
  
      let t1 = gsap.timeline({
        scrollTrigger:{
          trigger:"#phone-model",
          start:"top+=200 top",
          end:"top top",
          endTrigger:"#Battery",
          scrub:true
          // markers:true,
        }
  
      })
      // t1.fromTo(camera.position,{y:0},{z:1})
      
      // .to(camera.position,{z:5,x:-0.01})
  
      // .to(scene.rotation,{y:4})
      // .to(scene.rotation,{y:0,z:0})
      const box = new THREE.Box3().setFromObject(groupRef.current);
      const center = box.getCenter(new THREE.Vector3());
      groupRef.current.position.set(-center.x, -center.y, -center.z);
  
    }, [])
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.SSwNHydlPxsUYYx.geometry} material={materials.VlnkJNnmZmryUEK} scale={0.01} />
      <mesh geometry={nodes.GoKkDPUheDuuSeZ.geometry} material={materials.PaletteMaterial001} scale={0.01} />
      <mesh geometry={nodes.LLCOsMNMwTSiaFM_0.geometry} material={materials.jUggraQHQxDJpnM} scale={0.01} />
      <mesh geometry={nodes.dhklRpTwbkGOiTk.geometry} material={materials.fexrCBexEqONlzJ} scale={0.01} />
      <mesh geometry={nodes.rhWSVMrzmgmACdq.geometry} material={materials.GoEESZWjCZpqeOD} scale={0.01} />
      <mesh geometry={nodes.TpYiAaTOnMgRFmX_0.geometry} material={materials.PaletteMaterial002} scale={0.01} />
      <mesh geometry={nodes.kkKyyQuSQljBsvq.geometry} material={materials.GCTfChbRIgBmWbe} scale={0.01} />
      <mesh geometry={nodes.MZgVlnVREwAXmWu_0.geometry} material={materials.TrnkWAfGduLgqLM} scale={0.01} />
      <mesh geometry={nodes.nHCDQLdTvgMPJbp.geometry} material={materials.pUfGAKnCgtMMbbm} scale={0.01} />
      <mesh geometry={nodes.ZCtyoMmbuhknTJj.geometry} material={materials.erHrUfZxAtkfXqO} scale={0.01} />
      <mesh geometry={nodes.NXKAkZjsnbPTLxk_0.geometry} material={materials.EcHAJKlkagvhESV} scale={0.01} />
      <mesh geometry={nodes.QouRlcwrCgGeXyH_0.geometry} material={materials.hgmDQvqtKSacBdB} scale={0.01} />
      <mesh geometry={nodes.VglCddniAjuXwWP.geometry} material={materials.IIOPDiBWBbrUopx} scale={0.01} />
      <mesh geometry={nodes.SLEuRDFLKhfUOyE.geometry} material={materials.nLgTjJkjjIwxPzH} scale={0.01} />
      <mesh geometry={nodes.MVWilhydUNwPxpT.geometry} material={materials.fhuhwvvbmZNTsNo} scale={0.01} />
      <mesh geometry={nodes.tYhdRFkjheTEnwh.geometry} material={materials.euLqrXMAOeSzxXG} scale={0.01} />
      <mesh geometry={nodes.lWFljklIAvFvrBM_0.geometry} material={materials.toZkefdtnUhLKyP} scale={0.01} />
      <mesh geometry={nodes.mZCSizhtifxXBqG_0.geometry} material={materials.myxBndjHzHABgaf} scale={0.01} />
      <mesh geometry={nodes.WUgXyTEbZmkapMh_0.geometry} material={materials.nfKhILGSzwibuSI} scale={0.01} />
      <mesh geometry={nodes.quvFSzOoArSvcXY.geometry} material={materials.HTVLbrDhlLdibKi} scale={0.01} />
      <mesh geometry={nodes.rxiMoNrvziDIZct.geometry} material={materials.WeYJTXtSqeWejVb} scale={0.01} />
      <mesh geometry={nodes.LcaTrKQHGWZApgK.geometry} material={materials.WSDoIreTMPBuTxz} scale={0.01} />
      <mesh geometry={nodes.OcdXOLSkbIPgJqo_0.geometry} material={materials.uApvtlLvHnjNKSG} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
