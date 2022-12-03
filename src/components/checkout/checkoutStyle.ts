import styled from "styled-components";

export const CheckoutInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 56px;
    padding: 0 16px;
`

export const Breadcrumbs = styled.div`
    display: flex;
    align-items: center;
`

export const Label = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: ${p => p.color};
`

export const TitlePageDiv = styled.div`
    display: flex;
    align-items: center;
    height: 10vh;
`

export const TitlePage = styled.h1`
    font-weight: 600;
    font-size: 2.125rem;
    color: var(--Primary);
`


export const CheckoutContent = styled.div`
    display: flex;
    justify-content: space-between;
`

export const AddressAndPayment = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
`

export const NewAddressDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const NewAddressHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
`
export const NewAddressTitle = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Dark);
`
export const ArrowImgModal = styled.img`
    height: 24px;
    width: 24px;
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--Separator);
`

export const NewAddressContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35vh;
`
export const InputsLeft = styled.div`
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: space-evenly;
    width: 40%;
`

export const InputsRight = styled.div`
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: space-evenly;
`
export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 20vh;
`
export const InputTitle = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const InputAddress = styled.input`
    height: 52px;
    width: 287px;
    border-radius: 4px;
    background-color: var(--Grey);
    border: none;
    padding: 0 16px;
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

export const InputsNumber = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const InputDDD = styled.input`
    height: 52px;
    width: 80px;
    border-radius: 4px;
    background-color: var(--Grey);
    border: none;
    padding: 0 16px;
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`
export const InputNumber = styled.input`
    height: 52px;
    width: 270px;
    border-radius: 4px;
    background-color: var(--Grey);
    border: none;
    padding: 0 16px;
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

export const InputAddressRight = styled.input`
    height: 52px;
    width: 391px;
    border-radius: 4px;
    background-color: var(--Grey);
    border: none;
    padding: 0 16px;
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

export const PaymentMethodDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const PaymentMethodHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const PaymentMethodTitle = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Dark);
`

export const ButtonsActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 55%;
    margin-bottom: 142px;
`
export const ButtonBack = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Primary);
    cursor: pointer;
    text-decoration: underline;
`
export const ButtonNext = styled.button`
    height: 44px;
    width: 136px;
    border-radius: 8px;
    background-color: var(--Primary);
    border: none;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Bright);
    cursor: pointer;

`
