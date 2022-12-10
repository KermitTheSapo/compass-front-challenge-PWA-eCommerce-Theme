import styled from "styled-components";

export const InvoiceCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const CardTitle = styled.h3`
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--TypeHighEmphasis);
    text-transform: capitalize;
`
export const CardParagraph = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
`
export const CardPrice = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const CardQuantity = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
`

export const Separator = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--Grey);
`