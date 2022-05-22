import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

class Game extends React.Component {
  
render(){

  const unityContext = new UnityContext({
    loaderUrl: "./build/SDVisualizer_webGL_3.loader.js",
    dataUrl: "./build/SDVisualizer_webGL_3.data",
    frameworkUrl: "./build/SDVisualizer_webGL_3.framework.js",
    codeUrl: "./build/SDVisualizer_webGL_3.wasm",
    })
  
  return (<Unity
      unityContext={unityContext}
      style={{
        height: "100%",
        width: "100%",
        background: "grey",
      }}
    />);
}
}

export default Game;
