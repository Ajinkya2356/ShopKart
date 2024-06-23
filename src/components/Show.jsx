import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Model from "../../public/Sneaker";
import { OrbitControls } from "@react-three/drei";

const Show = () => {
  return (
    <Canvas
      style={{
        border: "2px solid white",
        maxWidth: "45%",
        height: "auto",
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Model scale={[20, 20, 20]} color={"red"}/>
      </Suspense>
    </Canvas>
  );
};

export default Show;
