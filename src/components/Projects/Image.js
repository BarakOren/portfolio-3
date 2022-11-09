import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

const ParallaxStyle = styled(Parallax)`
  width: 55%;
  height: 80%;
  // align-self: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  /* background-repeat: no-repeat; */
  background-position: center;
  background-image: ${(p) => `url(${p.img})`};
  border-radius: 8px;
  // box-shadow: 0px 20px 100px rgba(255, 255, 255, 0.1);

`;

const ImageTest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`

const Image = (props) => {
  const { img } = props;
      // <ImageContainer  img={img}></ImageContainer>


  return (
    <ParallaxStyle
        translateX={['-30px', '0px']}
        translateY={['-100px', '100px']}
        scale={[0.9, 1]}
        opacity={[0.5,1]}
    >
    <ImageContainer img={img} />
    </ParallaxStyle>
  );
};

export default Image;
