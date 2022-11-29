import styled from "styled-components";

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const OrderHeader = styled.div`
    display: flex;
    align-items: center;
    height: 8vh;
    background-color: var(--Bright);
    padding: 0 16px;
`

export const ImgArrowBack = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 20px;
`
export const OrderTitle = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`
export const AddressDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 15vh;
    justify-content: space-evenly;
`
export const AddressTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    padding: 0 16px;
    width: 100%;
`

export const AddressInfo = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--Accent);
    border-radius: 8px;
    height: 70px;
    padding: 0 16px;
    justify-content: space-between;
    width: 92%;
`
export const AddressContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
`
export const AddressInfoTitle = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const AddressInfoDescription = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const AddressEditBtn = styled.img`
`


export const DeliveryDiv = styled.div`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 20vh;
`
export const OrderDetails = styled.div``

export const OrderDetailsTitle = styled.h2`
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--TypeLowEmphasis);
    padding: 0 16px;
`

export const Summary = styled.div`
    display: flex;
    flex-direction: column;
    height: 15vh;
    justify-content: space-evenly;
    padding: 0 16px;
`

export const DivList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ListTitle = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const ListPrice = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ListResult = styled.div`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ListResultValue = styled.div`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`

export const DeliveryTitle = styled.h2`
font-weight: 600;
font-size: 0.875rem;
color: var(--TypeLowEmphasis);
`
export const DivBtnFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    background-color: var(--Bright);
    position: fixed;
    bottom: 0;
    width: 100%;
    right: 0;
`
export const ButtonPayments = styled.button`
    border: none;
    height: 44px;
    width: 90%;
    border-radius: 8px;
    background-color: var(--Primary);
    color: var(--Bright);
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
`

export const SheetAdress = styled.div