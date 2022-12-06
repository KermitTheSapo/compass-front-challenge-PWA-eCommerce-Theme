import styled from "styled-components";

export const ItemsOrderedContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const ItemsOrderedHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    padding: 0 16px;
`

export const DivContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 45%;
`

export const ImgArrow = styled.img`

`

export const ItemsOrderedTitle = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`

export const ImgOptions = styled.img`

`
export const OrderDescription = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    height: 104px;
    justify-content: space-between;
    border-radius: 8px;
    background-color: var(--Grey);
    align-self: center;
    width: 95%;
`
export const OrderDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
`
export const OrderDetailsTitle = styled.h2`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const OrderDateInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const OrderParagraphInfo = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
`
export const OrderDateText = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const OrderStatus = styled.div`
    height: 90%;
    display: flex;
    align-items: flex-end;
`
export const BtnStatus = styled.button`
    height: 32px;
    border-radius: 8px;
    border: none;
    background-color: var(--Primary);
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeBright);
`

export const Products = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 0 16px;
`

export const ProductsParagraph = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    display: flex;
    align-items: center;
    height: 5vh;
    padding: 0 16px;
`

export const ReorderButton = styled.button`
    height: 44px;
    border-radius: 8px;
    border: none;
    background-color: var(--Primary);
    font-weight: 600;
    font-size: 14px;
    color: var(--Bright);
    position: fixed;
    bottom: 2%;
    width: 90%;
    right: 5%;
`

export const Separator = styled.div`
    height: 8px;
    width: 100%;
    background-color: var(--Grey);
`

export const OrderDetailsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 16px;
    height: 15vh;
`

export const OrderDetailsInfoTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`

export const Summary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const OrderDetailsInfoParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`

export const OrderDetailsInfoPrice = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const OrderDetailsInfoResult = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`

export const OrderDetailsInfoPriceResult = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`

export const AddressDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 16px 16px;
    height: 15vh;
`
export const AddressDetailsTitle = styled.div`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const DivContentName = styled.div`
    display: flex;
    align-items: center;
`
export const AddressName = styled.div`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const Place = styled.div`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--Dark);
    padding: 2px 6px 2px 6px;
    background-color: var(---Grey);
    border-radius: 4px;
`
export const AddressText = styled.div`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const CityText = styled.div`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const ZipCodeText = styled.div`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`

export const PaymentDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 16px;
    height: 15vh;
    margin-bottom: 5vh;
    gap: 13px;
`

export const PaymentDetailsTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`

export const PaymentParagraph = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
