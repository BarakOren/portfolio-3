import styled from "styled-components";
import Project from "./sdfh";
import {Data} from "./data";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px 0;
`;

const Projects = (props) => {
  const {refProp} = props
  return (
    <Container ref={refProp}>
      {Data.map((project, i) => {
        return <Project key={i} project={project}/>
      })}
    </Container>
  );
};

export default Projects;
