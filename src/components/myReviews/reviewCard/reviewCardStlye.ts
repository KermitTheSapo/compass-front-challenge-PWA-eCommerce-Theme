import styled from "styled-components";

export const ReviewCard = styled.div`
    display: flex;
    align-items: center;
    height: 18vh;
`
export const ReviewCardContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 15vh;
    justify-content: space-between;
`
export const Date = styled.p`
    font-weight: 500;
    font-size: 0.75rem;   
    color: var(--TypeLowEmphasis);
`
export const StarDiv = styled.div`
    display: flex;
    align-items: center;
`
export const Title = styled.h2`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const Paragraph = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const Description = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    line-height: 18px;
`
export const ImgArrow = styled.img`

`