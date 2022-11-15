import styled from "styled-components";

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    height: 56px;
    width: 100%;
    background-color: var(--Bright);
    @media (min-width: 768px) {
        display: none;
    }
`

export const NavTab = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Img = styled.img`
    
`

export const LinkNavTab = styled.a`
    text-decoration: none;
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Name = styled.span`
    font-weight: 500;
    font-size: 0.75rem;
    text-align: center;
    color: var(--Primary);
`