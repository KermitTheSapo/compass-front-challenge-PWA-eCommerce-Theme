import styled from "styled-components";

import homePhoto from "@/assets/imgs/singup/homePhoto.png"

export const SingUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-image: url(${homePhoto});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    width: 100vw;    
`


export const SingUpContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(255, 244, 229, 0) 0%, rgba(255, 250, 244, 0.96) 51.9%);
    height: 30%;
    @media (min-width: 768px) {
        width: 100%;   
    }
    
`
export const SingUpTitle = styled.h1`
    font-weight:700;
    font-size: 1.875rem;
    line-height: 42px;
    color: var(--TypeHighEmphasis);
    width: 90%;
`
export const BtnGetStarted = styled.button`
    height: 44px;
    width: 90%;
    border: none;
    border-radius: 8px;
    background-color: var(--Primary);
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Bright);
`
export const Paragraph = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`

export const LoginContainer = styled.div``