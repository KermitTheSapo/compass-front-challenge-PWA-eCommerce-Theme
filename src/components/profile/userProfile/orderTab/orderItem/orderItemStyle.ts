import styled from "styled-components";

export const OrderItemContainer = styled.div`
    height: 78px;
    border-radius: 8px;
    width: 100%;
    background-color: var(--Grey);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    
`

export const OrderId = styled.div`
    display: flex;
    align-items: center;
`
export const InputCheckbox = styled.input`
    @media (max-width: 768px) {
        display: none;
    }

`
export const Label = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const LabelDate = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
    @media (max-width: 768px) {
        font-weight: 500;
        font-size: 0.75rem;
        color: var(--TypeLowEmphasis);
    }
`
export const DateDiv = styled.div`
    display: flex;
    @media (max-width: 768px) {
        order: -1;
    }
`
export const PriceDiv = styled.div`

`
export const StatusDiv = styled.div`
@media (max-width: 768px) {
        display: none;
    }

`
export const StatusParagraph = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--Primary);
`
export const ArrowDiv = styled.div`
    
`
export const ImgArrow = styled.img` 

`

export const OrderCardContent = styled.div`

@media (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
}
    display: flex;
    flex-direction: column;
    gap: 8px;
`