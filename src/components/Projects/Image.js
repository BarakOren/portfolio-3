import { Parallax } from "react-scroll-parallax";
import styled, {keyframes, css} from "styled-components";
import { useEffect, useState, useRef } from "react";

const ParallaxStyle = styled(Parallax)`
  width: 55%;
  height: 80%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${(p) => `url(${p.img})`};
  border-radius: 8px;
  cursor: pointer;
`;

const fadeIn = keyframes`
  from { 
    display: flex;
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% { 
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
`

const FullScreenContainer = styled.div`
  display: ${p => p.fullScreen ? 'flex' : 'none'};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 5;
  animation: ${props =>
    props.fullScreen &&
    css`${fadeIn} 0.3s`};
`;

const FullScreenVideo = styled.img`
  width: 90%;
  height: auto;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`

const Image = (props) => {
  const { img } = props;

  const [fullScreen, setFullScreen] = useState(false);
  return (
    <>
    <ParallaxStyle
        translateX={['-30px', '0px']}
        translateY={['-100px', '100px']}
        scale={[0.9, 1]}
    >
    <ImageContainer img={img} onClick={() => setFullScreen(!fullScreen)} />
    </ParallaxStyle>
    <FullScreenContainer fullScreen={fullScreen} onClick={() => setFullScreen(!fullScreen)}>
      <FullScreenVideo src={img} alt="video" />
    </FullScreenContainer>
    </>
  );
};

export default Image;
