import styled, {keyframes, css} from "styled-components";
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline'
import {Github} from '@styled-icons/bootstrap/Github'
import CopyButton from "./CopyButton"
import {useState} from "react";
import { Parallax } from "react-scroll-parallax";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px 0;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 5;
`

const EmailIcon = styled(EmailOutline)`
  color: white;
`

const GithubIcon = styled(Github)`
  color: white;
`

const EmailAddress = styled.p`
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`


const Fade = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

const Copied = styled.p`
    position: absolute;
    top: 50%;
    left: 350px;
    transform: translateY(-50%);
    font-size: 24px;
    color: white;
    font-weight: 300;
    text-shadow: 0 0 3px white;
    opacity: 0;
    color: white;
    margin: 0;
    animation: ${props =>
        props.clicked &&
        css`
          ${Fade} 2s ease-out
    `};
`

const StyledParallex = styled(Parallax)`
  width: 100%;
  height: 100%;
`

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: -5vw;
  transform: translateY(-20%);
  width: 50vw;
  height: 300px;
`

const Relative = styled.div`
  width: 100%;
  height: 100%;
  left: 100%;
  position: relative;
`

const Fader = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 180%;
  height: 100%;
  background: rgb(37,37,37);
background: linear-gradient(90deg, rgba(37,37,37,0) 10%, rgba(13,13,13,1) 90%);
z-index: 1;
`

const Text = styled.h1`
  font-size: 300px;
  letter-spacing: -20px;
  position: absolute;
  top: -0%;
  left: -5%;
  opacity: 0.5;
  margin: 0;
`

const Contact = (props) => {
  const {refProp} = props

  const [clicked, setClicked] = useState(false);
  const CopyText = () => {
    navigator.clipboard.writeText("barakoren5@gmail.com")
    setClicked(true);
    setTimeout(() => {
        setClicked(false);
    }, 2000)
  }

  const openLink = () => {
    window.open('https://github.com/BarakOren', '_blank');
  } 
     
  return <StyledParallex opacity={[0.7, 1]} > 
  <Container ref={refProp}>
    <Row>
      <CopyButton text={'Email'} action={CopyText} />
      <Copied clicked={clicked}>Copied!</Copied>
    </Row>
    <Row>
      <CopyButton text={'Github'} action={openLink} />
    </Row>
    </Container>
    <TextBox>
      <Relative>
        <Fader></Fader>
      </Relative>
      <Parallax style={{position: 'absolute', top: 0}} opacity={[0, 1]} translateX={['-100px', '0px']}>
      <Text>Contact</Text>
      </Parallax>
    </TextBox>
    </StyledParallex>
};

export default Contact;
