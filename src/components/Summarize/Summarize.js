import styled from "styled-components"
import Para from "./P"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`




const Summarize = () => {
    const Y = ['-100px', '100px']
    return <Container>
        <Para 
        text={'Adaptable Front-End Developer with 2 years of developing experience.'}
        X={[-30, 30]}
        Y={Y}
        />

        <Para 
        text={'Fast Learner who specializes in React, Redux and JavaScript.'}
        X={[-20, 20]}
        Y={Y}

        />
         
        <Para
        X={[-15, 15]}
        Y={Y}
        text={'Writing high level of clean code and passion for user experience and clean UI designs.'}
        />
    </Container>
}

export default Summarize