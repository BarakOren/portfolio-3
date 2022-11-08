import { ParallaxBanner } from "react-scroll-parallax";
import styled from "styled-components";

const ImageContainer = styled(ParallaxBanner)`
  width: 50%;
  height: 100%;
`;

const Image = () => {
  return (
    <ImageContainer
      layers={[{ image: "../../assets/sp.jpg", speed: -15 }]}
    ></ImageContainer>
  );
};

export default Image;
