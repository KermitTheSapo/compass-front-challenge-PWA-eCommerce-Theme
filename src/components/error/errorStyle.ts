import styled from "styled-components";

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    gap: 25px;
    background-color: var(--Bright);; 
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 1.75rem;
    color: var(--Dark);
`
export const Paragraph = styled.h2`

`

export const Button = styled.button`
    border-radius: 8px;
    background-color: var(--Primary);
    border: none;
    outline: none;
    padding: 10px 20px;
    color: var(--Bright);
    font-size: 0.875rem;
    font-weight: 600;
`