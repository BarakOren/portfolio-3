import React, { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Introduction from "./components/Introduction/Introduction";
import Header from "./components/header/Header";
import { ParallaxProvider } from "react-scroll-parallax";
import Summarize from "./components/Summarize/Summarize";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import BackToTop from "./components/BackToTop";
import LogosSection from "./components/LogosSection/LogosSection"

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  overflow-x: hidden;
  font-family: sans-serif;
  margin: 0;
  color: white;
  /* font-family: 'Open Sans', sans-serif; */
  font-family: 'Montserrat', sans-serif;

  
::-webkit-scrollbar{
  width: 12px;
  height: 12px;
  background-color: ${(p) => p.backgroundChange};
  transition: 1s background-color;
}
::-webkit-scrollbar-thumb{
  background: rgb(68, 68, 68);
  border-radius: 6px ;
}
::-webkit-scrollbar-thumb:hover{
  background: #8e8d8f;
}
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
  const ContactRef = useRef()

  useEffect(() => {
    scrollListner()
    window.addEventListener("scroll", scrollListner);

    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);

  return (
    <ParallaxProvider>
      <Header ContactRef={ContactRef} SummarizeRef={SummarizeRef} ProjectsRef={ProjectsRef} />
      <AppContainer backgroundChange={backgroundChange ? "#0d0d0d" : "#252525"}>
        <GlobalStyle backgroundChange={backgroundChange ? "#0d0d0d" : "#252525"} />
        <Introduction refProp={TopRef} />
        <Summarize refProp={SummarizeRef} />
        <Projects refProp={ProjectsRef} />
        <Contact refProp={ContactRef} />
        <BackToTop refProp={TopRef} />
      </AppContainer>
    </ParallaxProvider>
  );
};

export default App;
