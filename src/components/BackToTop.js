import styled from "styled-components";
import {ArrowheadUpOutline} from '@styled-icons/evaicons-outline/ArrowheadUpOutline'

const Container = styled.div`
  width: 100%;
  height: 30vh;
`;

const Button = styled(ArrowheadUpOutline)`
  background: none;
  transition: .2s all;
  &:hover{
    transform: scale(1.1);
    cursor: pointer;
    filter: drop-shadow(0 0 5px #ffffff55);
  }

`;

const BackToTop = (props) => {
  const { refProp } = props;

  const ScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Button size="50" onClick={() => ScrollTo(refProp)}>TOP</Button>
    </Container>
  );
};

export default BackToTop;
