import styled from "styled-components";
import Project from "./sdfh";
import {Data} from "./data";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Projects = () => {
  return (
    <Container>
      {Data.map((project, i) => {
        return <Project key={i} project={project}/>
      })}
    </Container>
  );
};

export default Projects;
