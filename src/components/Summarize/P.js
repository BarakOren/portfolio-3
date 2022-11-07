import styled from "styled-components";
import { Parallax } from 'react-scroll-parallax';
import { useState } from "react";

const P = styled.p`
    font-size: 24px;
    margin: 5px 0;
`

const Para = (props) => {
    const {text, X, Y} = props;
    return <Parallax translateY={Y} translateX={X}
    >
        <P >
            {text}
        </P>
    </Parallax>
}

export default Para