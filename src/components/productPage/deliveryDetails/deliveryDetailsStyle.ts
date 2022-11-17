import styled from "styled-components";

export const DeliveryDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 16px;
    height: 12vh;
    margin-bottom: 10px;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        height: 10vh;
    }
`

export const DeliveryContent = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        justify-content: space-evenly;
        height: 100%;
    }
`
export const DeliveryTitle = styled.h3`
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--TypeHighEmphasis);
    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
`
export const DeliveryParagraph = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--TypeLowEmphasis);
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`
export const DeliveryPinCode = styled.form`
    display: flex;
    background-color: var(--Grey);
    height: 46px;
    @media (min-width: 768px) {
        width: 80%;
    }
`
export const DeliveryInput = styled.input`
    height: 100%;
    width: 90%;
    background-color: transparent;
    padding: 0 16px;
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    border: none;
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`
export const DeliveryBtn = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Primary);
    text-transform: uppercase;

`