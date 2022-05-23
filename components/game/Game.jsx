'use strict';

import React from "react";
import Button from '@mui/material/Button';
import Unity, { UnityContext } from "react-unity-webgl";

class Game extends React.Component {

state={
  fullscreen: false,
  topMargin: window.innerHeight+50,        
}

unityContext = new UnityContext({
    loaderUrl: "./build/CenteringVisualizer_WebGL.loader.js",
    dataUrl: "./build/CenteringVisualizer_WebGL.data",
    frameworkUrl: "./build/CenteringVisualizer_WebGL.framework.js",
    codeUrl: "./build/CenteringVisualizer_WebGL.wasm",
    productName: "Centering App",
    productVersion: "1.0.0",
    companyName: "Blue Hole Games",
    webGLContextAttributes: {
      alpha: true,
      antialias: true,
      depth: true,
      failIfMajorPerformanceCaveat: true,
      powerPreference: "high-performance",
      premultipliedAlpha: true,
      preserveDrawingBuffer: true,
      stencil: true,
      desynchronized: true,
      xrCompatible: true,
      },
    })

handleOnClickFullscreen() {
    this.unityContext.setFullscreen(true);
    this.setState(prevState => ({fullscreen: !prevState.fullscreen}));
    console.log(this.state.fullscreen);
    
  }
  
render(){
  
  return (
    <div> 
    <Unity
      className={"centering-canvas"}
      unityContext={this.unityContext}
      style={{
        height: this.state.topMargin,
        width: window.innerWidth,       
        background: "grey",
      }}
    />
    </div>
  
  );
}
}
//style={{
      //  height: calc(window.innerHeight + env(safe-area-inset-top)),
       // width: window.innerWidth,
      //  background: "grey",
      //}}

export default Game;
