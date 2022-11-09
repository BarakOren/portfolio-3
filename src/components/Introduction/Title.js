import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Name = styled.h1`
  font-size: 120px;
  margin: 0 0;
  font-family: "Unica One", cursive;
`;

const Prof = styled.h1`
  font-size: 60px;
  margin: 0 0;
  font-weight: 300;
`;

const Title = () => {
  const endScroll = 700;
  const Y = ['0px', '300px']

  return (
    <Container>
      <Parallax
        startScroll={1}
        endScroll={endScroll}
        opacity={[1, 0]}
        translateX={[0, 70]}
        translateY={Y}
      >
        <Name>XXXXX XXXX</Name>
      </Parallax>
      <Parallax
        startScroll={10}
        endScroll={endScroll}
        opacity={[1, 0]}
        translateX={[0, -50]}
        translateY={Y}
      >
        <Prof>Front End Developer</Prof>
      </Parallax>
    </Container>
  );
};

export default Title;
