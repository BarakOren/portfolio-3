import styled, {keyframes} from "styled-components";
import { Parallax } from "react-scroll-parallax";
import {Redux} from '@styled-icons/boxicons-logos/Redux'
import {ReactLogo} from '@styled-icons/fa-brands/ReactLogo'
import {Firebase} from '@styled-icons/boxicons-logos/Firebase'
import {Nuxtdotjs} from '@styled-icons/simple-icons/Nuxtdotjs'
import {Tailwindcss} from '@styled-icons/simple-icons/Tailwindcss'
import {Webflow} from '@styled-icons/simple-icons/Webflow'
import {Styledcomponents} from '@styled-icons/simple-icons/Styledcomponents'
import {Nextdotjs} from '@styled-icons/simple-icons/Nextdotjs'
import {Figma} from '@styled-icons/fa-brands/Figma'


const Label = styled.p`
    position: absolute;
    font-size: ${p => `${p.fontSize}px`}; 
    top: ${p => `${p.top}px`};
    margin: 0;
    left: -100%;
    color: white;
    opacity: 0;
    transition: 0.2s all;
    color: ${p => `#${p.color}`};
    text-shadow: ${p => `0 0 5px #${p.color}`};
    // filter: blur(2px);
`

const React = styled(ReactLogo)`
    color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(0px 0px 30px #${p.color}50)`} ; 
    transition: .2s all;
    position: relative;
    z-index: 5;
    &:hover {
    filter: ${p => `drop-shadow(0px 0px 30px #${p.color}80)`} ; 
    transform: scale(1.1);
    
    }
    &:hover ~ ${Label} {
        left: 50%;
        transform: translateX(-50%);
        filter: ${p => `drop-shadow(3px 3px 4px ${p.color}) `};
        opacity: 1;
    }
`

const ReduxLogo = styled(Redux)`
    color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(0px 0px 30px #${p.color}50)`} ;
    transition: .2s all;
    position: relative;
    z-index: 5;
    &:hover {
    filter: ${p => `drop-shadow(0px 0px 30px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        left: 50%;
        transform: translateX(-50%);
        filter: ${p => `drop-shadow(3px 3px 4px ${p.color}) `};
        opacity: 1;
    }
`


const StyledComponentsLogo = styled(Styledcomponents)`
    color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(0px 0px 30px #${p.color}20)`} ;
    transition: .2s all;
    position: relative;
    z-index: 5;
    font-size: 10vw;
    &:hover {
    filter: ${p => `drop-shadow(0px 0px 30px #${p.color}80)`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        left: 50%;
        transform: translateX(-50%);
        filter: ${p => `drop-shadow(3px 3px 4px ${p.color}) `};
        opacity: 1;
    }
`


const FigmaLogo = styled(Figma)`
    color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(0px 0px 30px #${p.color}20)`} ;
    transition: .2s all;
    position: relative;
    z-index: 5;
    &:hover {
    filter: ${p => `drop-shadow(0px 0px 30px #${p.color}80)`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        left: 50%;
        transform: translateX(-50%);
        filter: ${p => `drop-shadow(3px 3px 4px ${p.color}) `};
        opacity: 1;
    }
`

const FlexBox = styled(Parallax)`
    width: 100vw;
    height: 100vh;
    margin: 100px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 50%;
    width: ${p => p.width};
    // margin: 50px 0;
    `



const LogosSection = () => {
    
    return <FlexBox
        translateY={['-100px', '100px']}
        scale={[1, 1.2]}
        >
        <IconContainer width={"30%"}>
        <React color={'61DBFB'} size={'200'}  /> 
        <Label color={'61DBFB'} fontSize={'60'} top={'-30'}>React</Label>
        </IconContainer>

        <IconContainer width={"30%"}>
        <ReduxLogo color={'764abc'} size={'200'}  /> 
        <Label color={'764abc'} fontSize={'60'} top={'-30'}>Redux</Label>
        </IconContainer>
        
        <IconContainer width={"30%"}>
        <StyledComponentsLogo color={'ffd561'}   />
        <Label color={'ffd561'} fontSize={'40'} top={'-30'}>Styled-Components</Label>
        </IconContainer>

        <IconContainer>
        <FigmaLogo color={'ffd561'} size={'80'} />
        <Label color={'ffd561'} fontSize={'20'} top={'40'}>Styled-Components</Label>
        </IconContainer>

        </FlexBox>
}

export default LogosSection;