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
  background: ${(p) => (p.backgroundChange ? "white" : "#252525")};
  color: white;
  /* font-family: 'Open Sans', sans-serif; */
  font-family: 'Montserrat', sans-serif;
  transition: 2s all;
}
`;

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  const [backgroundChange, setBackgroundChange] = useState(false);

  const scrollListner = () => {
    if (window.pageYOffset > window.innerHeight * 2) {
      setBackgroundChange(true);
      console.log("true");
    } else {
      setBackgroundChange(false);
      console.log("false");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListner);
    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);

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
};

export default App;
