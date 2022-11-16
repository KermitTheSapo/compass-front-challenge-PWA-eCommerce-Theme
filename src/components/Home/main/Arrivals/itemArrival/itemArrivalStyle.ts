import styled from 'styled-components'

export const ItemArrival = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 12px;
  @media (min-width: 768px) {
    gap: 38px;
  }
`
export const ImgProduct = styled.img`
  @media (min-width: 768px) {
    height: 286px;
    width: 286px;
  }
`

export const InformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
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
