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
`;

const DetailsContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid white;
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

const Project = () => {
  return (
    <Container>
      <Image />

      <DetailsContainer>
        <Title>Project</Title>
        <Summarize>
          gdsjlgjds jlsdg as ds adj jsdg jsdgj sd djsj ssdgjsdls dj sd gjdjdj
          jsjd jd sjld j gdsjlgjds jlsdg as ds adj jsdg jsdgj sd djsj ssdgjsdls
          dj sd gjdjdj jsjd jd sjld j
        </Summarize>
        <BulletContainer>
          <Bullet>slajdg asljdgsa djlg</Bullet>
          <Bullet>slajdg asljdgsa djlg</Bullet>
          <Bullet>slajdg asljdgsa djlg</Bullet>
        </BulletContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Project;
