import styled from "styled-components";
import { Parallax, ParallaxBannerLayer } from "react-scroll-parallax";
import Image from "./Image";

const Container = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
`;

const DetailsContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
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

const Project = (props) => {
  const {name,info,subInfo,image,website,github} = props.project;
  return (
    <Container>
      <Image img={image}/>
      <DetailsContainer>
        <Title>{name}</Title>
        <Summarize>{info}</Summarize>
        <BulletContainer>
          {subInfo.map((info, i) => {
            return <Bullet>{info}</Bullet>
          })}
        </BulletContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Project;
