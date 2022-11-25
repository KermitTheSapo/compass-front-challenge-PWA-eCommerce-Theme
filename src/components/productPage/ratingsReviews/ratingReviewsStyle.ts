import styled from "styled-components";

export const RatingsReviews = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 48px;
    @media (min-width: 769px) {
        display: none;
    }
`
export const RatingsReviewsTitle = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const RatingArrow = styled.img``

export const LinkRatings = styled.a`
    text-decoration: none;
`

