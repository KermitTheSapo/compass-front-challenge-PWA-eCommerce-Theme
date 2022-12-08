import styled from "styled-components";

export const HeadContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8vh;
`

export const ProductHead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 16px;
    height: 7vh;
`
export const ProductHeadTitle = styled.h1`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
    text-transform: capitalize;
`
export const ProductHeadSubTitle = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`

export const Ratings = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`

export const AverageRatings = styled.div`
    display: flex;
    align-items: center;
    height: 4vh;
    gap: 4px;
`
export const AverageRatingsNumber = styled.p`
    font-weight: 600;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const AverageRatingsStar = styled.img`
    height: 20px;
    width: 20px; 
    margin-right: 8px;
`
export const AverageTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`

export const Photos = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 15vh;
`
export const PhotosTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
    padding: 0 16px;
`

export const PhotoCarousel = styled.div`
    padding: 0 0 0 16px;
    display: flex;
    min-width: 100%;
    overflow: auto;
    gap: 15px;
    &::-webkit-scrollbar { 
  display: none;
}
`
export const ImgCarousel = styled.img`
    height: 80px;
    width: 80px;
`
// export const XX = styled.div``