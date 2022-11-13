import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import Image from "./Image";
import Button from "./Button";
import Logos from "./logos"

const Container = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 50px 0;
  /* position: relative; */
`;

const ParallaxStyle = styled(Parallax)`
width: 100%;
height: 100%;
align-self: flex-start;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 30px;
border-radius: 8px;
`;

const DetailsContainer = styled.div`
  width: 40%;
  transition: 0.2s all;
  &:hover {
    cursor: default;
    transform: scale(1.1);
  }

  // height: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  margin: 0;
`;

const Summarize = styled.p`
  font-size: 18px;
  text-align: left;
  margin: 0;
`;

const BulletContainer = styled.ul`
  width: 100%;
  height: auto;
  text-align: left;
`;

const Bullet = styled.li`
  font-size: 18px;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Project = (props) => {
  const { name, info, subInfo, image, website, github, tech } = props.project;
  console.log(github === null);
  return (
    <Container>
      <Image img={image} />

      <DetailsContainer>
        <ParallaxStyle
          rotateY={[-35, 0]}
          rotateX={[-35, 0]}
          scale={[0.9, 1]}
          translateX={["30px", "0px"]}
        >
          <Title>{name}</Title>
          <Summarize>{info}</Summarize>
          <BulletContainer>
            {subInfo.map((info, i) => {
              return <Bullet>{info}</Bullet>;
            })}
          </BulletContainer>

          <Logos tech={tech}/>

          <ButtonsContainer>
            <Button text={"github"} disabled={github === null} link={github} />
            <Button text={"website"} link={website} />
          </ButtonsContainer>
        </ParallaxStyle>

      </DetailsContainer>
    </Container>
  );
};

export default Project;
