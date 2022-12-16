import styled from "styled-components";

export const WishlistErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 50vh;
`

export const Img = styled.img`
    height: 239px;
`

export const ErrorTitle = styled.h1`
    font-weight: 700;
    font-size: 1.75rem;
    color: var(--Dark);
`

export const ErrorParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Dark);
    text-align: center;
    width: 80%;
`

export const StartBtn = styled.button`
    height: 44px;
    border-radius: 8px;
    background-color: var(--Primary);
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Bright);
    width: 90%;
    border: none;
    position: fixed;
    bottom: 2%;
    left: 5%;
    @media (min-width: 768px) {
        display: none;
    }
`