import React, {useRef} from "react";
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
  background: #252525;
  color: white;
  /* font-family: 'Open Sans', sans-serif; */
  font-family: 'Montserrat', sans-serif;
}
`;

const AppContainer = styled.div`
  text-align: center;
  padding-bottom: 100vh;
`;

const App = () =>{

  return (
    <>
      <Header />
    <ParallaxProvider>
    <AppContainer>
        <GlobalStyle />
        <Introduction />
        <Summarize />
        <Projects />
    </AppContainer>
    </ParallaxProvider>
  </>
  );
}

export default App;
