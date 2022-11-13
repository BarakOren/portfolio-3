import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

const ParallexContainer = styled(Parallax)`
  height: 80px;
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 10;
  

`;

const Container = styled.header`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Name = styled.p`
  margin: 0 0;
`;

const Links = styled.div`
  margin: 0 0;
  width: 70vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledLink = styled.p`
  text-decoration: none;
  font-size: 1.7vw;
  margin: 0% 0 0 5%;
  transition: all 0.5s;
  color: rgb(212, 212, 212);
  &:hover {
    color: rgb(255, 255, 255);
    text-shadow: 2px 2px 10px rgb(255, 255, 255, 0.8);
    cursor: pointer;
  }
`;

const Header = (props) => {
  const { ProjectsRef, SummarizeRef, ContactRef } = props;
  const ScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ParallexContainer
      translateY={["0px", "700px"]}
      startScroll={10}
      endScroll={800}
    >
      <Container>
        <Name>Barak Oren</Name>
        <Links>
          <StyledLink
            onClick={() => ScrollTo(SummarizeRef)}
          >
            Summarize
          </StyledLink>
          <StyledLink
            onClick={() => ScrollTo(ProjectsRef)}
          >
            Projects
          </StyledLink>
          <StyledLink
            onClick={() => ScrollTo(ContactRef)}
          >
            Contact
          </StyledLink>
        </Links>
      </Container>
    </ParallexContainer>
  );
};

export default Header;
