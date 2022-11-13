import styled from "styled-components";
import Project from "./sdfh";
import { Data } from "./data";
import { Parallax } from "react-scroll-parallax";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px 0;
  position: relative;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 100px;
  margin: 0;
`;

const Frame = styled.div`
  width: 300px;
  height: 150px;
  position: absolute;
  top: -10px;
`

const Relative = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const UnderLine = styled.div`
  height: 1px;
  width:300px;
  background-color: white;
  position: absolute;
  bottom: -150px;

`


const Projects = (props) => {
  const { refProp } = props;
  const Xmovment = ["-400px", "200px"]
  return (
    <Container ref={refProp}>
      <Parallax translateX={["-100px", "100px"]}>
        <Title>Projects</Title>
      </Parallax>
        <Frame>
        <Relative>
          <Parallax translateX={Xmovment} scaleX={[1, 1.5]}>
          <UnderLine />
          </Parallax>
        </Relative>
        </Frame>

  

      {Data.map((project, i) => {
        return <Project key={i} project={project} />;
      })}
    </Container>
  );
};

export default Projects;
