import styled from "styled-components";
import Para from "./P";
import { Parallax } from "react-scroll-parallax";


// const Flare = styled.div`
//   width: 100%;
//   height: 100%;
//   background: rgb(255, 192, 0);
//   background: linear-gradient(
//     90deg,
//     rgba(255, 192, 0, 0.3) 0%,
//     rgba(255, 175, 0, 0) 100%
//   );
//   border-radius: 0%;
//   opacity: 0.3;
// `;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px 0;
  position: relative;
`;

const ParallexContainer = styled(Parallax)`
  width: 60vw;
  height: 30vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Frame = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid white;
`

const Summarize = (props) => {
  const { refProp } = props;
  const Y = ["-200px", "100px"];
  return (
    <Container ref={refProp}>
      <Para
        text={
          "Adaptable Front-End Developer with 2 years of developing experience."
        }
        X={[-30, 30]}
        Y={Y}
      />

      <Para
        text={"Fast Learner who specializes in React, Redux and JavaScript."}
        X={[-20, 20]}
        Y={Y}
      />

      <Para
        X={[-15, 15]}
        Y={Y}
        text={
          "Writing high level of clean code and passion for user experience and clean UI designs."
        }
      />

      <ParallexContainer
        // rotate={[0, 30]}
        opacity={[0, 1]}
        translateX={[-40, 40]}
        translateY={Y}
      >
        <Frame />
      </ParallexContainer>
    </Container>
  );
};

export default Summarize;
