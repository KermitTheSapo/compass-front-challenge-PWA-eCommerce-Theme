import styled from "styled-components";

export const PhoneNumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    height: 30vh;
    justify-content: space-between;
    margin-top: 32px;
    @media (min-width: 768px) {
        height: 60vh;
        justify-content: center;
        gap: 30px;
    }
    
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 2.5rem;
    color: var(--Primary);
    line-height: 52px;
    width: 80%;
    @media (min-width: 768px) {
        width: 100%;
        text-align: center;
    }
`
export const InputsDiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 12px;
    @media (min-width: 768px) {
        justify-content: center;
    }
`
export const InputDdd = styled.input`
    height: 42px;
    width: 52px;
    border-radius: 4px;
    border: none;
    background-color: var(--Grey);
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    padding: 0 0 0 8px;
`
export const InputNumber = styled.input`
    border: none;
    height: 42px;
    border-radius: 4px;
    background-color: var(--Grey);
    padding: 0 16px;
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const Paragraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    @media (min-width: 768px) {
        text-align: center;
    }
`
export const ButtonNext = styled.button`
    height: 44px;
    border-radius: 8px;
    background-color: var(--Primary);
    border: none;
    color: var(--Bright);
    font-weight: 600;
    font-size: 0.875rem;
    position: fixed;
    bottom: 2%;
    width: 90%;
    cursor: pointer;
    right: 5%;
    @media (min-width: 768px) {
        width: 30%;
        left: 35%;
        bottom: 45%;
    }
`