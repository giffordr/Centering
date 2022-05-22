'use strict';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

class Game extends React.Component {

unityContext = new UnityContext({
    loaderUrl: "./build/SDVisualizer_webGL_3.loader.js",
    dataUrl: "./build/SDVisualizer_webGL_3.data",
    frameworkUrl: "./build/SDVisualizer_webGL_3.framework.js",
    codeUrl: "./build/SDVisualizer_webGL_3.wasm",
    })

componentDidMount() {
    unityContext.setFullscreen(true);
  }
handleOnClickFullscreen() {
    unityContext.setFullscreen(true);
  }
  
render(){

  //const unityContext = new UnityContext({
    //loaderUrl: "./build/SDVisualizer_webGL_3.loader.js",
    //dataUrl: "./build/SDVisualizer_webGL_3.data",
    //frameworkUrl: "./build/SDVisualizer_webGL_3.framework.js",
    //codeUrl: "./build/SDVisualizer_webGL_3.wasm",
   // })
  
  return (
    <div>
      
    <Unity
      unityContext={this.unityContext}
      style={{
        height: "100%",
        width: "100%",
        background: "grey",
      }}
    />
    <button onClick={this.handleOnClickFullscreen}>Fullscreen</button>
    </div>
  
  );
}
}

export default Game;
