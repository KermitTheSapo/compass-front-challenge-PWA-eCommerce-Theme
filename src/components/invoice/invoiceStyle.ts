import styled from "styled-components";

import download from "@/assets/imgs/invoice/download.svg"

export const InvoiceContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const InvoiceHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 10vh;
`

export const InvoiceHeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: space-between;
`

export const ImgArrow = styled.img`

`

export const Title = styled.h1` 
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`

export const ImgOptions = styled.img`

`

export const OrderDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 104px;
    justify-content: space-between;
    border-radius: 8px;
    background-color: var(--Grey);
    align-self: center;
    width: 95%;
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

export const ParagraphItems = styled.p`
    height: 5vh;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    padding: 0 16px;
`

export const InvoiceCards = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    gap: 14px;
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

export const DivButtonDownload = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--Bright);
    position: fixed;
    height: 10vh;
    bottom: 0;
    left: 0;
`
export const ButtonDownload = styled.button`
    height: 44px;
    width: 90%;
    border-radius: 8px;
    background-color: var(--Primary);
    border: none;
    color: var(--Bright);
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
    background-image: url(${download});
    background-repeat: no-repeat;
    background-position: 28%;
    background-size: 20px;
`