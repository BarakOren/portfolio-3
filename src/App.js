import React, { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Introduction from "./components/Introduction/Introduction";
import Header from "./components/header/Header";
import { ParallaxProvider } from "react-scroll-parallax";
import Summarize from "./components/Summarize/Summarize";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import BackToTop from "./components/BackToTop";

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  overflow-x: hidden;
  font-family: sans-serif;
  margin: 0;
  color: white;
  /* font-family: 'Open Sans', sans-serif; */
  font-family: 'Montserrat', sans-serif;
}
`;

const AppContainer = styled.div`
  text-align: center;
  background-color: #252525;
  background: ${(p) => p.backgroundChange};
  transition: 1s background;
`;

const App = () => {
  const [backgroundChange, setBackgroundChange] = useState(false);

  const scrollListner = () => {
    if (window.pageYOffset >= window.innerHeight * 1) {
      setBackgroundChange(true);
    } else if (window.pageYOffset <= window.innerHeight * 1) {
      setBackgroundChange(false);
    }
  };

  const TopRef = useRef();
  const SummarizeRef = useRef();
  const ProjectsRef = useRef();

  useEffect(() => {
    setBackgroundChange(false);
    window.addEventListener("scroll", scrollListner);

    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);

  return (
    <ParallaxProvider>
      <Header SummarizeRef={SummarizeRef} ProjectsRef={ProjectsRef} />
      <AppContainer backgroundChange={backgroundChange ? "#0d0d0d" : "#252525"}>
        <GlobalStyle />
        <Introduction refProp={TopRef} />
        <Summarize refProp={SummarizeRef} />
        <Projects refProp={ProjectsRef} />
        <Contact />
        <BackToTop refProp={TopRef} />
      </AppContainer>
    </ParallaxProvider>
  );
};

export default App;
