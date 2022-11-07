import React from "react";
import {Link} from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";

const Container = styled.header`
    z-index: 0;
    background-color: transparent;
    height: 80px;
    width: 90vw;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;
    align-items: center;
    @media only screen and (max-width: 800px){
        display: none;
}
`

const Name = styled.p`
    margin: 0 0;    
`

const Links = styled.div`
    margin: 0 0;
    width: 70vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const StyledLink = styled.p`
    text-decoration: none;
    font-size: 1.7vw;
    margin: 0% 0 0 5%;
    transition: all .5s;
    color: rgb(212, 212, 212);
    &:hover{
        color: rgb(255, 255, 255);
        text-shadow: 2px 2px 10px rgb(255,255,255, 0.8);
        cursor: pointer;
    }
`

const Header = () => {

    const location = useLocation().pathname;

    return(
            <Container>
                <Name>Barak Oren</Name>
                <Links >
                    <StyledLink style={{color: location === "/" ? "white" : "", textShadow: location === "/" ? "2px 2px 10px rgb(255,255,255, 0.8)" : ""}} to="/" >About</StyledLink>
                    <StyledLink style={{color: location === "/projects" ? "white" : "", textShadow: location === "/projects" ? "2px 2px 10px rgb(255,255,255, 0.8)" : ""}} to="/projects" >Projects</StyledLink>
                    <StyledLink style={{color: location === "/designs" ? "white" : "", textShadow: location === "/designs" ? "2px 2px 10px rgb(255,255,255, 0.8)" : ""}} to="/designs" >Designs</StyledLink>
                    <StyledLink style={{color: location === "/contact" ? "white" : "", textShadow: location === "/contact" ? "2px 2px 10px rgb(255,255,255, 0.8)" : ""}} to="/contact" >Contact</StyledLink>  
                </Links>
        </Container>
    )
}

export default Header;