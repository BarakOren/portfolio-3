import FaceImage from "../../assets/fullface.png"
import styled from "styled-components"

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
        <FaceImg src={FaceImage} alt="face" />
    </Container>
}

export default Face;