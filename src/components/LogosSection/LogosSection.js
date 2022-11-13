import styled, {keyframes} from "styled-components";
import {ReactLogo} from '@styled-icons/fa-brands/ReactLogo'
import { Parallax } from "react-scroll-parallax";
import {Redux} from '@styled-icons/boxicons-logos/Redux'

const Star = styled.span`
    position: absolute;
    top: ${p => `${p.top}%`};
    left: ${p => `${p.left}%`};
    width: ${p => `${p.size}px`};
    height: ${p => `${p.size}px`};
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 5px white;
    filter: ${p => `blur(${p.blur}px)`};
    transition: .2s all;
`


const Pop = color => keyframes`
      0% {
          filter: ${p => `drop-shadow(0 0 0px #${p.color})`}
      }
      100% {
        filter: ${p => `drop-shadow(0 0 50px #${p.color})`}
    }
`

const React = styled(ReactLogo)`
    color: ${p => `#${p.color}`};
    /* filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ; */
    transition: .2s all;
    position: relative;
    z-index: 5;
    &:hover {
    /* filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ; */
    transform: scale(1.1);
    animation: ${p => Pop(p.color)} 1s linear;
    }
    &:hover ~ ${Star} {
        background-color: #61DBFB;
        /* filter: drop-shadow(3px 3px 4px #61DBFB); */
    }
`

const ReduxLogo = styled(Redux)`
    color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ;
    transition: .2s all;
    position: relative;
    z-index: 5;
    &:hover {
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Star} {
        background-color: #764abc;
        filter: drop-shadow(3px 3px 4px #764abc);
    }
`

const Container = styled.div`
    width: 100vw;
    height: 150vh;
    margin: 100px 0;
    position: relative;
`

const FlexBox = styled(Parallax)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 5;

`

const IconContainer = styled.div`
    width: 30%;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ParallaxStars = styled(Parallax)`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: -25%;
    z-index: 0;

`


const LogosSection = () => {
    const starsCount = []
    for(let i = 0; i < 100; i++){
        starsCount.push(i)    
    }

    const returnRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    return <Container>
        <FlexBox
        translateY={['-100px', '100px']}
        scale={[1, 1.2]}
        >
        <React color={'61DBFB'} size={'200'}></React>
        <ReduxLogo color={'764abc'} size={'200'}></ReduxLogo>
        <React color={'61DBFB'} size={'200'}></React>
        {/* <ParallaxStars 
        translateY={['-200px', '500px']}
        >  */}
        {/* {starsCount.map((star, i) => {
                return <Star 
                left={returnRandom(1, 100)} 
                top={returnRandom(1, 100)}
                size={returnRandom(1, 7)}
                blur={returnRandom(0.2, 3)}
                />
        })} */}
            {/* </ParallaxStars> */}
        </FlexBox>
       
    </Container>
}

export default LogosSection;