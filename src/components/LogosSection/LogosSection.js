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

const Container = styled.div`
    width: 100vw;
    height: 110vh;
    margin: 100px 0 200px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 150px 0;
`

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
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    // margin: 100px 0;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: ${p => p.width};
    // margin: 50px 0;
    `



const LogosSection = () => {
    
    const mainIconsSize = '18vw'
    const subIconsSize = '10vw'

    return <Container>
        
        <FlexBox
        translateY={['-100px', '100px']}
        scale={[1, 1.2]}
        >
        <IconContainer >
        <React color={'61DBFB'} size={mainIconsSize}  /> 
        <Label color={'61DBFB'} fontSize={'60'} top={'-40'}>React</Label>
        </IconContainer>

        <IconContainer >
        <ReduxLogo color={'764abc'} size={mainIconsSize}  /> 
        <Label color={'764abc'} fontSize={'60'} top={'-40'}>Redux</Label>
        </IconContainer>
        
        <IconContainer >
        <StyledComponentsLogo size={'20vw'} color={'ffd561'}   />
        <Label color={'ffd561'} fontSize={'40'} top={'-40'}>Styled-Components</Label>
        </IconContainer>
        </FlexBox>

        <FlexBox
        translateY={['-100px', '100px']}
        scale={[1, 1.2]}
        >
        <IconContainer>
        <FigmaLogo color={'ffd561'} size={subIconsSize} />
        <Label color={'ffd561'} fontSize={'20'} top={'40'}>Styled-Components</Label>
        </IconContainer>
        
        <IconContainer>
        <FigmaLogo color={'ffd561'} size={subIconsSize} />
        <Label color={'ffd561'} fontSize={'20'} top={'40'}>Styled-Components</Label>
        </IconContainer>

        <IconContainer>
        <FigmaLogo color={'ffd561'} size={subIconsSize} />
        <Label color={'ffd561'} fontSize={'20'} top={'40'}>Styled-Components</Label>
        </IconContainer>

        </FlexBox>
       


        </Container>
}

export default LogosSection;