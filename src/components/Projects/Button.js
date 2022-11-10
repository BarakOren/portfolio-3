import styled from "styled-components";

const ButtonStyles = styled.a`
  background: rgba(255, 255, 255, 0.3);
  padding: 10px 30px;
  transition: 0.2s all;
  text-decoration: none;
  color: white;
  display: ${(p) => (p.disabled ? "none" : "default")};

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
  }
`;

const Button = (props) => {
  const { text, link, disabled } = props;
  return (
    <ButtonStyles disabled={disabled} target="_blank" href={link}>
      {text}
    </ButtonStyles>
  );
};

export default Button;
