import React, {useRef} from "react";
import styled, {createGlobalStyle} from "styled-components"
import Introduction from "./components/Introduction/Introduction";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import "./locomotive-scroll.css";
import Header from "./components/header/Header";

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
  height: 1000px;
`;

const App = () =>{

  const containerRef = useRef(null)
  return (
    <LocomotiveScrollProvider
    options={{ smooth: true }}
    containerRef={containerRef}
   >
    <main data-scroll-container className="container">
    <AppContainer>
      <Header />
        <GlobalStyle />
        <Introduction />
    </AppContainer>
    </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
