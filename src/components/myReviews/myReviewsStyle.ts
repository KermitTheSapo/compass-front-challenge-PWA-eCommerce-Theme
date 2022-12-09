import styled from "styled-components";


export const MyReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ReviewsHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px;
    justify-content: space-between;
    height: 7vh;
`
export const TrailingIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
`
export const ImgArrow = styled.img`
    @media (min-width: 768px) {
        display: none;
    }
`
export const ReviewsTitle = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`
export const ImgOptions = styled.img`

`

export const ReviewContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`