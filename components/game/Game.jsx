'use strict';
import React from "react";
import Button from '@mui/material/Button';
import Unity, { UnityContext } from "react-unity-webgl";

class Game extends React.Component {

state={
  fullscreen: false,
        
}

unityContext = new UnityContext({
    loaderUrl: "./build/SDVisualizer_webGL_3.loader.js",
    dataUrl: "./build/SDVisualizer_webGL_3.data",
    frameworkUrl: "./build/SDVisualizer_webGL_3.framework.js",
    codeUrl: "./build/SDVisualizer_webGL_3.wasm",
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
      unityContext={this.unityContext}
      style={{
        height: window.innerHeight,
        width: window.innerWidth,
        background: "grey",
      }}
    />
    </div>
  
  );
}
}

export default Game;
