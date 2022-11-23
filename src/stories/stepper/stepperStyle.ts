import styled from "styled-components";

export const StepperContainer = styled.div`
    width: 79px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid var(--Primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Img = styled.img`
    height: 100%;
    background-color: ${p => p.color};
    cursor: pointer;
`

export const Counter = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: var(--TypeHighEmphasis);
`