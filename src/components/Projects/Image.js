import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

const ParallaxStyle = styled(Parallax)`
  width: 55%;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  /* background-repeat: no-repeat; */
  background-position: center;
  background-image: ${(p) => `url(${p.img})`};
  border-radius: 20px;
  box-shadow: -10px 0 10px rgb(255, 255, 255, 0.3);
`;

const Image = (props) => {
  const { img } = props;
  const ref = useRef(null);
  const [position, setPosition] = useState({ top: 0, bottom: 0 });
  useEffect(() => {
    setTimeout(() => {
      const nums = ref.current.getBoundingClientRect();
      setPosition({ top: nums.top - 300, bottom: nums.top + 100 });
    }, 1000);
  }, [ref]);

  return (
    <ParallaxStyle
      rotateY={[50, 0]}
      rotateZ={[3, 0]}
      // startScroll={position.top}
      // endScroll={position.bottom}
      // translateX={[-5, 0]}
    >
      <ImageContainer ref={ref} img={img}></ImageContainer>
    </ParallaxStyle>
  );
};

export default Image;
