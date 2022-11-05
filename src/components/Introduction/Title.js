import React from "react";
import styled from "styled-components";
import { useRef, useState, useEffect, useMemo } from "react";
import "../../locomotive-scroll.css"
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const Name = styled.h1`
  font-size: 100px;
  margin: 0 0;
`;

const Prof = styled.h1`
  font-size: 60px;
  margin: 0 0;

`

const Title = () => {

  return (
    <Container>
      <Name  data-scroll
      data-scroll-speed="-20"
      data-scroll-position="top"
      data-scroll-direction="horizontal"
      data-scroll-delay='1.5'
      >
        Barak Oren
      </Name>
      <Prof  data-scroll
      data-scroll-speed="10"
      data-scroll-position="top"
      data-scroll-direction="horizontal"
      data-scroll-delay='1.5'
      >
        Front End Developer
      </Prof>
    </Container>

  );
};

export default Title;
