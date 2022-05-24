'use strict';

import React from "react";
import Button from '@mui/material/Button';
import Unity, { UnityContext } from "react-unity-webgl";

class Game extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      fullscreen: false,
      topMargin: window.innerHeight+50,
      widthMargin: window.innerWidth};

    // This binding is necessary to make `this` work in the callback
    this.handleResize = this.handleResize.bind(this);
  }

unityContext = new UnityContext({
    loaderUrl: "./build/CenteringVisualizer_WebGL_2.loader.js",
    dataUrl: "./build/CenteringVisualizer_WebGL_2.data",
    frameworkUrl: "./build/CenteringVisualizer_WebGL_2.framework.js",
    codeUrl: "./build/CenteringVisualizer_WebGL_2.wasm",
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

handleResize() {
   
    this.setState({
          topMargin: window.innerHeight + 50,
          widthMargin: window.innerWidth
    })
  
}


  
render(){
   window.addEventListener('resize', this.handleResize)
  return (
    <div> 
       
    <Unity
      className={"centering-canvas"}
      unityContext={this.unityContext}
      style={{
        height: "100vh",
        width: "100vw",       
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
