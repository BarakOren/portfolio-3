import React, { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Introduction from "./components/Introduction/Introduction";
import Header from "./components/header/Header";
import { ParallaxProvider } from "react-scroll-parallax";
import Summarize from "./components/Summarize/Summarize";
import Projects from "./components/Projects/Projects";

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  overflow-x: hidden;
  font-family: sans-serif;
  margin: 0;
  background: ${p => p.backgroundChange};
  color: white;
  /* font-family: 'Open Sans', sans-serif; */
  font-family: 'Montserrat', sans-serif;
  transition: 2s background;
}
`;

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  const [backgroundChange, setBackgroundChange] = useState(false);

  const scrollListner = () => {
    if (window.pageYOffset > window.innerHeight * 1) {
      setBackgroundChange(true);
      console.log("true");
    } else {
      setBackgroundChange(false);
      console.log("false");
    }
  };

  const TopRef = useRef();
  const SummarizeRef = useRef();
  const ProjectsRef = useRef();

  useEffect(() => {
    setBackgroundChange(false)
    window.addEventListener("scroll", scrollListner);



    return () => {
      window.removeEventListener("scroll", scrollListner);
    };


  }, []);


  return (
    <>
      <Header Topref={TopRef} SummarizeRef={SummarizeRef} ProjectsRef={ProjectsRef} />
      <ParallaxProvider>
        <AppContainer>
          <GlobalStyle
          backgroundChange={backgroundChange ? "#0d0d0d" : "#252525"} />
          <Introduction refProp={TopRef} />
          <Summarize refProp={SummarizeRef} />
          <Projects refProp={ProjectsRef} />
        </AppContainer>
      </ParallaxProvider>
    </>
  );
};

export default App;
