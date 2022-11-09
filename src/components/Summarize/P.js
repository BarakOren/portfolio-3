import styled from "styled-components";
import { Parallax } from 'react-scroll-parallax';

const P = styled.p`
    font-size: 24px;
    margin: 30px 0;
`

const Para = (props) => {
    const {text, X, Y} = props;
    return <Parallax translateY={Y} translateX={X}>
        <P>
            {text}
        </P>
    </Parallax>
}

export default Para