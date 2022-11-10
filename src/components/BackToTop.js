import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30vh;
`;

const Button = styled.button`
  background: none;
`;

const BackToTop = (props) => {
  const { refProp } = props;

  const ScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Button onClick={() => ScrollTo(refProp)}>TOP</Button>
    </Container>
  );
};

export default BackToTop;
