import styled from "styled-components";

export const AlsoLikeProducts = styled.div`
    display: flex;
    width: 154px;
    @media (min-width: 768px) {
        overflow: auto;
        width: 98vw;
        gap: 150px;
        height:50vh;
        &::-webkit-scrollbar { 
            display: none;
        }
    }
`
export const BtnTrending = styled.div`
    border-radius: 4px;
    background-color: var(--Highlight);
    height: 18.25px;
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 20px;
    right: 60px;
    z-index: 2;
`

export const SpanTrending = styled.span`
    font-weight: 500;
    font-size: 0.625rem;
    color: var(--TypeBright);
`

export const AlsoLikeContent = styled.div`

`

export const Div = styled.div`
    display: flex;
    width: 154px;
`


export const ItemLink = styled.a`
  text-decoration: none;
`


export const ItemArrival = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  margin-top: 12px;
  @media (min-width: 768px) {
    gap: 38px;
  }
`
export const ImgProduct = styled.img`
height: 138px;
width: 136px;
  @media (min-width: 768px) {
    height: 286px;
    width: 286px;
  }
`

export const InformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 95%;
  @media (max-width: 768px) {
    width: 90%;    
  }
`

export const NameHeart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ItemName = styled.h3`
  font-weight: 600;
  font-size: 0.75rem;
  color: var(--TypeHighEmphasis);
  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 1rem;
  }
`
export const Heart = styled.img`
  height: 16.5px;
  width: 18.75px;
`
export const ItemDescription = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  color: var(--TypeLowEmphasis);
  width: 90%;
  @media (min-width: 768px) {
    font-weight: 400;
    font-size: 0.875rem;
  }
`
export const ItemPrice = styled.p`
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--TypeHighEmphasis);
  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 1rem;
  }

`

export const DivInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
export const ItemSafe = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: var(--TypeLowEmphasis);
  text-decoration: line-through;
  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 0.625rem;
  }
`
export const ItemDiscount = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: var(--DiscountText);
  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 0.625rem;
  }
`

export const DivStar = styled.div`
  display: flex;
  align-items: center;
`

export const Star = styled.img`
  @media (max-width: 768px) {
    width: 50%;
  }
`

export const Ratings = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--Primary);
  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 0.625rem;
  }
`