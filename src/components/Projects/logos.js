import styled from "styled-components"
import {ReactLogo} from '@styled-icons/fa-brands/ReactLogo'
import {Redux} from '@styled-icons/boxicons-logos/Redux'
import {Firebase} from '@styled-icons/boxicons-logos/Firebase'
import {Nuxtdotjs} from '@styled-icons/simple-icons/Nuxtdotjs'
import {Tailwindcss} from '@styled-icons/simple-icons/Tailwindcss'
import {Webflow} from '@styled-icons/simple-icons/Webflow'
import {Styledcomponents} from '@styled-icons/simple-icons/Styledcomponents'
import {Nextdotjs} from '@styled-icons/simple-icons/Nextdotjs'
import {Mapbox} from '@styled-icons/simple-icons/Mapbox'
import {Mongodb} from '@styled-icons/simple-icons/Mongodb'
import {Nodejs} from '@styled-icons/boxicons-logos/Nodejs'


const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 0 30px;
    flex-wrap: wrap;
`


const Label = styled.p`
    position: absolute; 
    top: -40px;
    left: -100%;
    color: white;
    opacity: 0;
    transition: 0.2s all;
    color: ${p => `#${p.color}`};
    text-shadow: ${p => `0 0 5px #${p.color}`};
    white-space: nowrap;
    width: 100%;
    text-align: center;
    filter: blur(2px);
`

const React = styled(ReactLogo)`
color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ;
    transition: .2s all;
    position: relative;
    &:hover {
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        opacity: 1;
        transform: scale(1.1);
        left: 0;
        filter: blur(0);
    }
`

const ReduxLogo = styled(Redux)`
color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ;
    transition: .2s all;
    position: relative;
    &:hover {
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        opacity: 1;
        transform: scale(1.1);
        left: 0;
        filter: blur(0);
    }
`

const FirebaseLogo = styled(Firebase)`
color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ;
    transition: .2s all;
    position: relative;
    &:hover {
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        opacity: 1;
        transform: scale(1.1);
        left: 0;
        filter: blur(0);
    }
`

const Nuxt = styled(Nuxtdotjs)`
color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ;
    transition: .2s all;
    position: relative;
    &:hover {
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        opacity: 1;
        transform: scale(1.1);
        left: 0;
        filter: blur(0);
    }
`

const TailWind = styled(Tailwindcss)`
color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ;
    transition: .2s all;
    position: relative;
    &:hover {
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        opacity: 1;
        transform: scale(1.1);
        left: 0;
        filter: blur(0);
    }
`

const WebflowLogo = styled(Webflow)`
 color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ;
    transition: .2s all;
    position: relative;
    &:hover {
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        opacity: 1;
        transform: scale(1.1);
        filter: blur(0);
        left: 0;
    }
`

const StyledcomponentsLogo = styled(Styledcomponents)`
 color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ;
    transition: .2s all;
    position: relative;
    &:hover {
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        opacity: 1;
        transform: scale(1.1);
        left: 0;
        filter: blur(0);
    }
`

const NextLogo = styled(Nextdotjs)`
    color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ;
    transition: .2s all;
    position: relative;
    &:hover {
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        opacity: 1;
        transform: scale(1.1);
        color: white;
        text-shadow: 0 0 5px white;
        left: 0;
        filter: blur(0);
    }
    background: white;
    border-radius: 50%;
    border: 1px solid white;
`

const MapboxLogo = styled(Mapbox)`
    color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ;
    transition: .2s all;
    position: relative;
    &:hover {
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        opacity: 1;
        transform: scale(1.1);
        left: 0%;
        filter: blur(0);
    }
`


const MongodbLogo = styled(Mongodb)`
    color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ;
    transition: .2s all;
    position: relative;
    &:hover {
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        opacity: 1;
        transform: scale(1.1);
        left: 0%;
        filter: blur(0);
    }
`


const NodejsLogo = styled(Nodejs)`
    color: ${p => `#${p.color}`};
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color}55)`} ;
    transition: .2s all;
    position: relative;
    &:hover {
    filter: ${p => `drop-shadow(3px 3px 4px #${p.color})`} ;
    transform: scale(1.1);
    }
    &:hover ~ ${Label} {
        opacity: 1;
        transform: scale(1.1);
        left: 0%;
        filter: blur(0);
    }
`

const IconContainer = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`




const Logos = (props) => {
    const {tech} = props
    const size = 40
    return <Container>
        {tech.map((t, i) => {
            return <>
            {t === 'React' && <IconContainer> 
                <React size={size} color={'61DBFB'}/>
                <Label color={'61DBFB'}>React</Label> 
                </IconContainer>
            }
            {t === 'StyledcomponentsLogo' && 
            <IconContainer>
            <StyledcomponentsLogo color={'ffd561'} size={size} />
            <Label color={'ffd561'}>Styled-Components</Label> 
            </IconContainer>
            }
            {t === 'FirebaseLogo' &&
            <IconContainer>
                <FirebaseLogo color={'FFA661'} size={size} />
                <Label color={'FFA661'}>Firebase</Label> 
            </IconContainer>
            }
            {t === 'MapboxLogo' && 
            <IconContainer>
            <MapboxLogo color={'4264FB'} size={size} />
            <Label color={'4264FB'}>MapBox</Label> 
            </IconContainer>
            }
            {t === 'ReduxLogo' && 
            <IconContainer>
            <ReduxLogo color={'764abc'} size={size} />
            <Label color={'764abc'}>Redux</Label> 
            </IconContainer>
            }
            {t === 'Nuxt' && 
            <IconContainer>
            <Nuxt color={'41b883'} size={size} />
            <Label color={'41b883'}>Nuxt</Label> 
            </IconContainer>
            }
            {t === 'TailWind' && 
            <IconContainer>
            <TailWind color={'38bdf8'} size={size} />
            <Label color={'38bdf8'}>TailWind</Label> 
            </IconContainer>
            }
            {t === 'NextLogo' && 
            <IconContainer>
            <NextLogo color={'000000'} border={true} size={size} />
            <Label color={'000000'}>Next</Label> 
            </IconContainer>
            }
            {t === 'WebflowLogo' && 
            <IconContainer>
            <WebflowLogo color={'4353FF'} size={size} />
            <Label color={'4353FF'}>Webflow</Label> 
            </IconContainer>
            }
            {t === 'NodejsLogo' && 
            <IconContainer>
            <NodejsLogo color={'70e30f'} size={size} />
            <Label color={'70e30f'}>Node.js</Label> 
            </IconContainer>
            }
            {t === 'MongodbLogo' && 
            <IconContainer>
            <MongodbLogo color={'2edd1f'} size={size} />
            <Label color={'2edd1f'}>Mongodb</Label> 
            </IconContainer>
            }
             
            </>
                            
        })}
    </Container>
}

export default Logos;