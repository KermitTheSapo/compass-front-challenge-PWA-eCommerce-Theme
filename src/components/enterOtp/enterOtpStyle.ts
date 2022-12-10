import styled from "styled-components";

export const EnterOtpContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    height: 20vh;
    justify-content: space-between;
    margin-top: 52px;
    @media (min-width: 768px) {
        height: 70vh;
        justify-content: center;
        gap: 50px;
    }
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 2.5rem;
    color: var(--Primary);
    @media (min-width: 768px) {
        text-align: center;
    }
`
export const ParagraphInfo = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    @media (min-width: 768px) {
        text-align: center;
    }
`
export const InputsDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media (min-width: 768px) {
        justify-content: center;
        
    }
`
export const InputNumber = styled.input`
    height: 42px;
    width: 52px;
    border-radius: 4px;
    border: none;
    background-color: var(--Grey);
    padding: 0 0 0 8px;
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const RequestDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 68%;
    @media (min-width: 768px) {
        justify-content: center;
        width: 100%;
        gap: 15px;
    }
`
export const CodeParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const RequestParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Primary);
`
export const CreateButton = styled.button`
    height: 44px;
    width: 90%;
    border-radius: 8px;
    border: none;
    background-color: var(--Primary);
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Bright);
    position: fixed;
    bottom: 5%;
    left: 5%;
    @media (min-width: 768px) {
        width: 30%;
        left: 35%;
        bottom: 35%;
    }
`
