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
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 100px;
`;

const Projects = (props) => {
  const { refProp } = props;
  return (
    <Container ref={refProp}>
      <Parallax translateX={["-100px", "100px"]}>
        <Title>Projects</Title>
      </Parallax>
      {Data.map((project, i) => {
        return <Project key={i} project={project} />;
      })}
    </Container>
  );
};

export default Projects;
