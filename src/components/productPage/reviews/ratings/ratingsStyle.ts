import styled from "styled-components";

export const RatingsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeaderInformation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 45%;
    padding: 15px 0px 0px 16px;
`
export const RatingsPill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: var(--Accent);
    height: 38px;
    width: 74px;
`
export const RatingNumber = styled.p`
    
`
export const StarImg = styled.img`

`

export const RatingsPersonInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 5vh;
`
export const RatingsPersonName = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
    `
export const RatingsPersonDate = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 16px;
    height: 10vh;
`
export const RatingsTitle = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
    text-transform: capitalize;
`
export const RatingsDescription = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    text-transform: capitalize;
    word-break: break-all;
`
export const ImgsCarousel = styled.div`
    display: flex;
    display: flex;
    min-width: 100%;
    overflow: auto;
    gap: 15px;
    padding: 0 0 0 16px;
    &::-webkit-scrollbar { 
  display: none;
}
`
export const ImgCarousel = styled.img`
    height: 80px;
    width: 80px;
`


// export const ImgCarousel = styled.div``