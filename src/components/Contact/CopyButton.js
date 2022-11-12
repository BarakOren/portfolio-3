import styled, {keyframes} from "styled-components"


const Appear = keyframes` 
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const Slide = keyframes`
   0% {
        left: -100%;
    }
    100% {
        left: 0;
    }
`

const Shadow = keyframes`
   0% {
        box-shadow: 0 0 0 white;
        text-shadow: 0 0 0px white;
        letter-spacing: normal;
    }
    100% {
        letter-spacing: 3px;
        text-shadow: 0 0 6px white;
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
    }
` 

const StyledButton = styled.button`
    width: 300px;
    font-size: 20px;
    padding: 13px 0;
    border: none;
    background-color: transparent;
    position: relative;
    color: white;
    overflow: hidden;

    & span:nth-child(1) {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-left: 2px solid white;
        opacity: 0;
    }
    // top
    & span:nth-child(2){
        position: absolute;
        width: 100%;
        height: 100%;
        left: -100%;
        top: 0;
        border-top: 2px solid white;
        // opacity: 0;
    }

    // bottom
    & span:nth-child(3){
        position: absolute;
        width: 100%;
        height: 100%;
        left: -100%;
        bottom: 0;
        border-bottom: 2px solid white;
        // opacity: 0;
    }

    // right
    & span:nth-child(4){ 
        position: absolute;
        width: 100%;
        height: 100%;
        right: 0;
        top: 0;
        border-right: 2px solid white;
        opacity: 0;
    }

    p {
        margin: 0;
    }

    a {
        margin: 0;
        text-decoration: none;
        color: white;
    }

    &:hover{
        animation: ${Shadow} 0.5s forwards;
        animation-delay: 1s;
        cursor: pointer;

        span:nth-child(1) {
            animation: ${Appear} .5s forwards;
        }

        span:nth-child(2) {
            animation: ${Slide} .5s forwards;
            animation-delay: .3s;
        }

        span:nth-child(3) {
           animation: ${Slide} .5s forwards;
            animation-delay: .3s;
        }

        span:nth-child(4) {
            animation: ${Appear} .5s forwards;
            animation-delay: .8s;
        }
    }
`

const CopyButton = (props) => {
    const {text,action} = props;

    return <StyledButton onClick={() => action()}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <p>{text}</p>
    </StyledButton>
}

export default CopyButton;