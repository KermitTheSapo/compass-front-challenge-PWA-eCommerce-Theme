import styled from "styled-components";

export const NotificationContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const NotificationHeader = styled.div`
    display: flex;
    align-items: center;
    height: 10vh;
    justify-content: space-between;
    padding: 0 16px;
`
export const LeadingIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    @media (min-width: 768px) {
        width: 12%;
    }
`

export const ImgArrow = styled.img`

`
export const NotificationTitle = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`
export const ImgOptions = styled.img`

`

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 16px;
    height: 32vh;
    box-shadow: 0px 4px 10px 0px #0000000F;
    @media (min-width: 768px) {
        height: 50vh;
    }
`
export const ImgBanner = styled.img`
    @media (min-width: 768px) {
        height: 80%;
        object-fit: contain;
    }
`
export const BannerTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`
export const BannerParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const BannerBtn = styled.button`
    height: 44px;
    border-radius: 8px;
    background-color: transparent;
    border: 2px solid var(--Primary);
    color: var(--Primary);
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
`

export const FeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin-top: 20px;
    gap: 32px;
`