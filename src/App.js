import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [asset, setAsset] = useState(false);
  const innerRef = useRef(null);
  useEffect(() => {
    const assetRef = innerRef.current;
    assetRef.addEventListener("loaded", handleLoad);
    return () => {
      // unsubscribe event
      assetRef.removeEventListener("loaded", handleLoad);
    };
  }, []);
  const handleLoad = () => {
    console.log("loaded");
    setAsset(true);
  };
  return (
    <a-scene>
      <a-assets   ref={innerRef}>
        <a-asset-item
          id="carpet"
          response-type="arraybuffer"
          src="https://cdn.glitch.me/23642ad9-34a3-49cf-86ca-96583e4ab107%2Fcarpet.glb?v=1636094704675"

        ></a-asset-item>
        <a-asset-item
          id="dining-table"
          response-type="arraybuffer"
          src="https://cdn.glitch.me/23642ad9-34a3-49cf-86ca-96583e4ab107%2Fdinning_table.glb?v=1636612781702"
        ></a-asset-item>
        <a-asset-item
          id="gaming"
          response-type="arraybuffer"
          src="https://cdn.glitch.me/f02a2615-5a80-4ad9-9fed-0e3b54eb75a9%2Fgaming%20chair.glb?v=1635921880478"
        ></a-asset-item>
        <a-asset-item
          id="pub-wardrobe"
          response-type="arraybuffer"
          src="https://cdn.glitch.me/23642ad9-34a3-49cf-86ca-96583e4ab107%2Fpub-wardrobe.glb?v=1636098758588"
        ></a-asset-item>
        <a-asset-item
          id="bedroom"
          response-type="arraybuffer"
          src="https://cdn.glitch.me/23642ad9-34a3-49cf-86ca-96583e4ab107%2Fbedroom.glb?v=1636709444815"
        ></a-asset-item>
        <img
          crossorigin="anonymous"
          id="groundTexture"
          src="https://cdn.aframe.io/a-painter/images/floor.jpg"
        ></img>
        <img
          id="brick-wall-texture"
          src="https://cdn.glitch.me/23642ad9-34a3-49cf-86ca-96583e4ab107%2Fbrick-texture.jpg?v=1636563428518"
        ></img>
        <img
          id="white-wall-texture"
          src="https://cdn.glitch.me/23642ad9-34a3-49cf-86ca-96583e4ab107%2Fwhite-wall-texture.jpg?v=1636566880907"
        ></img>
        <img
          id="ceiling-texture"
          src="https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble.png"
        ></img>
        
      </a-assets>
      {asset ? (
        <>
          <a-plane
            src="#groundTexture"
            rotation="-90 0 0"
            position="0 -0.01 0"
            height="100"
            width="100"
          ></a-plane>
          <a-entity
            gltf-model="#carpet"
            position="0 0.050 0"
            scale="2.48 1 3.650"
          ></a-entity>
          <a-entity
        gltf-model="#pub-wardrobe"
        position="-2.180 0.110 1.800"
      ></a-entity>
      <a-entity
        gltf-model="#pub-wardrobe"
        position="-3.4 0.110 -5.2"
        rotation="0 270 0"
      ></a-entity>
      <a-entity
        gltf-model="#pub-wardrobe"
        position="-7.9 0.110 1.800"
      ></a-entity>
      <a-entity
        gltf-model="#pub-wardrobe"
        position="7.645 0.110 -1.814"
        rotation="0 180 0"
      ></a-entity>
     {/* <a-entity
        gltf-model="#pub-wardrobe"
        position="4.345 0.110 -1.814"
        rotation="0 180 0"
      ></a-entity> */}
      <a-entity
        gltf-model="#pub-wardrobe"
        position="2.5 0.110 -1.814"
        rotation="0 180 0"
      ></a-entity>
      <a-entity
        gltf-model="#pub-wardrobe"
        position="3.3 0.110 4.948"
        rotation="0 90 0"
      ></a-entity>
      <a-entity
        gltf-model="#dining-table"
        position="0 0.110 0"
        scale="0.001 0.001 0.001"
        rotation="0 0 0"
      ></a-entity>
      <a-entity
        gltf-model="#bedroom"
        position="-2.545 0.110 -17.507"
        rotation="0 90 0"
      ></a-entity>
          <rw-room
            position="-5 0 -5"
            material="src:#brick-wall-texture;repeat:1.5"
          >
            <rw-wall position="10 0 0">
            </rw-wall>
            <rw-wall position="10 0 10"></rw-wall>
            <rw-wall position="0 0 10"></rw-wall>
            <rw-wall position="0 0 0">
              <rw-doorhole id="holeA"></rw-doorhole>
              <rw-doorlink
                from="#holeA"
                to="#holeB"
                position="5 0 0"
              ></rw-doorlink>
            </rw-wall>
            <rw-ceiling material="src:#ceiling-texture;repeat:2"></rw-ceiling>
          </rw-room>
          <rw-room
            position="-1 0 -5"
            material="src:#white-wall-texture;repeat:1.5"
          >
            <rw-wall position="2 0 0">
              <rw-doorhole id="holeB"></rw-doorhole>
            </rw-wall>
            <rw-wall position="2 0 -10">
              <rw-doorhole id="holeG"></rw-doorhole>
            </rw-wall>
            <rw-wall position="0 0 -10">
              <rw-doorhole id="holeD"></rw-doorhole>
            </rw-wall>
            <rw-wall position="0 0 0"></rw-wall>
            <rw-ceiling material="src:#ceiling-texture;repeat:2"></rw-ceiling>
          </rw-room>
          <rw-room
            position="1 0 -12.5"
            material="src:#brick-wall-texture;repeat:1.5"
          >
            <rw-wall position="4 0 0"></rw-wall>
            <rw-wall position="4 0 4"></rw-wall>
            <rw-wall position="0 0 4">
              <rw-doorhole id="holeF"></rw-doorhole>
              <rw-doorlink
                from="#holeF"
                to="#holeG"
                position="2 0 0"
              ></rw-doorlink>
            </rw-wall>
            <rw-wall position="0 0 0"></rw-wall>
            <rw-ceiling material="src:#ceiling-texture;repeat:2"></rw-ceiling>
          </rw-room>
          <rw-room
            position="-5 0 -20"
            material="src:#brick-wall-texture;repeat:1.5"
          >
            <rw-wall position="10 0 0"></rw-wall>
            <rw-wall position="10 0 5">
              <rw-doorhole id="holeE"></rw-doorhole>
              <rw-doorlink
                from="#holeE"
                to="#holeD"
                position="5 0 0"
              ></rw-doorlink>
            </rw-wall>
            <rw-wall position="0 0 5"></rw-wall>
            <rw-wall position="0 0 0"></rw-wall>
            <rw-ceiling material="src:#ceiling-texture;repeat:2"></rw-ceiling>
          </rw-room>
        </>
      ) : (
        <></>
      )}
    </a-scene>
  );
}

export default App;
