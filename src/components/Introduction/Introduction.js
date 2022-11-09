import React, { useEffect } from "react";
import styled from "styled-components";
import Face from "./Face";
import Title from "./Title";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Introduction = (props) => {
  const {refProp} = props 
 
  return (
    <Container ref={refProp}>
      <Title />
      {/* <Face /> */}
    </Container>
  );
};

export default Introduction;
