import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({IsMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
      <mesh>
          <hemisphereLight intensity={0.15} groundColor="black" />
          <spotLight
              position={[-20, 50, 10]}
              angle={0.12}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize={1024}
              />
          <pointLight intensity={10} />
          <primitive
              object={computer.scene}
              scale={IsMobile ? 0.7 : 0.75}
              position={IsMobile ? [0,-3,-2.2]:[0, -3.2, -1.5]}
              rotation={[-0.01, -0.2, -0.12]}
          />
      </mesh>

  );
};

const ComputersCanvas = () => {
    const [IsMobile,setIsMobile]= useState(false);

    useEffect(()=>{
        const mediaQuery = window.matchMedia('max-width 500');
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChanges =(event)=>{
            setIsMobile(event.matches);
        }
        mediaQuery.addEventListener('change',handleMediaQueryChanges);
        return()=>{
            mediaQuery.removeEventListener('change',handleMediaQueryChanges)
        }
    },[])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers IsMobile={IsMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
