import React, {useRef, useState} from "react";
import styled, {createGlobalStyle} from "styled-components"
import Introduction from "./components/Introduction/Introduction";
import Header from "./components/header/Header";
import { ParallaxProvider } from 'react-scroll-parallax';
import Summarize from "./components/Summarize/Summarize";
import Projects from "./components/Projects/Projects";

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  overflow-x: hidden;
  font-family: sans-serif;
  margin: 0;
  background: ${p => p.backgroundChange ? "black" : "#252525"};
  color: white;
  /* font-family: 'Open Sans', sans-serif; */
  font-family: 'Montserrat', sans-serif;
  transition: 2s all;
}
`;

const AppContainer = styled.div`
  text-align: center;
`;

const App = () =>{

  const [backgroundChange, setBackgroundChange] = useState(false)

  document.addEventListener('scroll', () => {
    if(window.pageYOffset > window.innerHeight * 2 && !backgroundChange){
      setBackgroundChange(true)
    } else if (window.pageYOffset < window.innerHeight * 2 && backgroundChange){
      setBackgroundChange(false)
    }
  })

  return (
    <>
      <Header />
    <ParallaxProvider>
    <AppContainer>
        <GlobalStyle backgroundChange={backgroundChange} />
        <Introduction />
        <Summarize />
        <Projects />
    </AppContainer>
    </ParallaxProvider>
  </>
  );
}

export default App;
