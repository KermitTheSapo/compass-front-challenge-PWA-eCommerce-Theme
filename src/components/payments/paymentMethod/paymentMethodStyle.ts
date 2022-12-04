import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const PaymentOption = styled.div`
    display: flex;
    flex-direction: column;

`
export const PaymentMethodTitle = styled.h3`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ImgModal = styled.img`
    height: 24px;
    width: 24px;
`

export const PaymentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
`
export const MethodList = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    height: 20vh;
`
export const MethodItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Label = styled.label`
    display: flex;
    align-items: center;
`
export const ImgPayment = styled.img`
    margin-right: 12px;
`
export const NamePayment = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const InputRadio = styled.input``

export const UpiID = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    border: solid 1px var(--Grey);
    padding: 0 16px;
    height: 142px;
    gap: 24px;
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 10vh;
`
export const SaveBtn = styled.div`
    display: flex;
    align-items: center;
`

export const InputUpi = styled.input`
    border: none;
    height: 52px;
    border-radius: 4px;
    background-color: var(--Grey);
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
    padding: 0 16px;
    border: 2px solid ${p => p.color};
`
export const UpiExample = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--LightText);
`
export const InputCheckbox = styled.input`

`
export const LabelCheckbox = styled.label`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`

export const ParagraphError = styled.p`
    font-weight: 700;
    font-size: 1rem;
    color: var(--Error);
`