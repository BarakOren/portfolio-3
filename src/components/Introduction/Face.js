import FaceImage from "../../assets/fullface.png"
import styled from "styled-components"
import { Parallax } from 'react-scroll-parallax';

const Container = styled.div`
    width: 100%;
    height: 90%;
    position: absolute;
    top: -150px;
    z-index: -1;
`

const FaceImg = styled.img`
    width: auto;
    height: 130%;
`

const Face = () => {
    return <Container>
        <Parallax 
        startScroll={10}
        endScroll={300}
        translateY={['0px', '200px']}
        opacity={[1, 0]}
        style={{width: '100%', height: '100%'}}>
        <FaceImg src={FaceImage} alt="face" />
        </Parallax>
        </Container>

    
}

export default Face;