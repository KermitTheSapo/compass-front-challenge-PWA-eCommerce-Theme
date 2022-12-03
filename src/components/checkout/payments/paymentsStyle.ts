import styled from "styled-components"

export const CheckoutContent = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
`

export const ContactAndPayments = styled.div`
display: flex;
flex-direction: column;
width: 100%;

`
export const Separator = styled.div`
width: 100%;
height: 1px;
background-color: var(--Separator);
`


export const PaymentsDiv = styled.div`
display: flex;
flex-direction: column;
`
export const PaymentsHeader = styled.div`
display: flex;
align-items: center;
height: 5vh;
justify-content: space-between;
`
export const PaymentsTitle = styled.h2`
font-weight: 600;
font-size: 1.25rem;
color: var(--Dark);
`
export const PaymentMethods = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
export const CardMethod = styled.div`
width: 160px;
height: 143px;
border-radius: 12px;
background-color: transparent;
border: 1px solid var(--BorderCardPaymentMethod);
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
padding: 12px 9px;
`
export const InputRadioMethod = styled.input`
display: flex;
align-self: flex-end;
`
export const CardMethodName = styled.p`
width: 100%;
text-align: center;
font-weight: 500;
font-size: 1rem;
color: var(--TypeHighEmphasis);
`
export const ImgCardMethod = styled.img``

export const ActivePaymentMethod = styled.div`
height: 445px;
width: 100%;
border-radius: 8px;
background-color: transparent;
border: 1px solid var(--Primary);
padding: 11px 11px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
export const MethodItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`

export const MethodItemTitle = styled.p`

`
export const ImgTitleItem = styled.div`
display: flex;
align-items: center;
gap: 11px;
`

export const ImgMethod = styled.img`

`


export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ContactTitle = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Dark);
`
export const ImgArrowModal = styled.img`
    height: 24px;
    width: 24px;
`
